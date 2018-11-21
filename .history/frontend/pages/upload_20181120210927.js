import Link from 'next/link';
import styled from 'styled-components';

import ProgressBarWrapper from '../components/ProgressBarWrapper';

class Upload extends React.Component {
  uploadPreset = 'chingu';
  cloudName = 'rachnaban';
  xhrs = [];
  state = {image: '', largeImage: '', files: [], items: []};

  uploadFiles = e => {
    const files = e.target.files;
    const items = this.filesToItems(files);
    this.setState({items}, () => {
      this.upload();
    });
  };

  upload = () => {
    const items = this.state.items;
    if (items) {
      items
        .filter(item => !item.cancelled)
        .forEach(item => {
          this.uploadItem(item);
        });
    }
  };
  uploadItem = item => {
    this.uploadFile(item.file, progress =>
      this.updateFileProgress(item.index, progress),
    );
  };
  clearIfAllCompleted() {
    const completed = this.state.items.filter(item => item.progress === 100)
      .length;
    if (completed === this.state.items.length) {
      setTimeout(() => {
        this.setState({items: []});
      }, 3000);
    }
  }

  updateFileProgress(index, progress, response) {
    const newItems = [...this.state.items];
    newItems[index] = Object.assign(
      {},
      this.state.items[index],
      {progress},
      {response},
    );
    this.setState({items: newItems}, this.clearIfAllCompleted);
  }
  uploadFile = (file, progressCallback) => {
    if (file) {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      const url = `https://api.cloudinary.com/v1_1/${
        this.cloudName
      }/auto/upload`;
      formData.append('file', file, file.name);
      formData.append('upload_preset', this.uploadPreset);
      formData.append('tags', 'browser_upload');

      //Upload completed successfully
      xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        var tokens = response.secure_url.split('/');
        tokens.splice(-2, 0, 'w_150,h_150,c_scale');
        tokens.splice(-4, 1);
        tokens.splice(-1, 1, `${response.public_id.split('/')[1]}.jpg`);
        progressCallback(100, {src: tokens.join('/'), alt: response.public_id});
      };

      xhr.upload.onprogress = e => {
        if (e.lengthComputable) {
          progressCallback((e.loaded / e.total) * 100, null);
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
      this.xhrs[file.index] = xhr;
    }
  };
  filesToItems(files) {
    const fileItems = Array.from(files);
    const items = fileItems.map((f, i) => {
      return {file: f, index: i, progress: 0, cancelled: false};
    });
    return items;
  }
  cancelFile = index => {
    const newItems = [...this.state.items];
    newItems[index] = Object.assign({}, this.state.items[index], {
      cancelled: true,
    });
    if (this.xhrs[index]) {
      this.xhrs[index].upload.removeEventListener('progress');
      this.xhrs[index].removeEventListener('load');
      this.xhrs[index].abort();
    }
    this.setState({items: newItems});
  };
  /*processFiles = async (e, files) => {
    const allFiles = Array.from(files);
    this.setState({files: allFiles});
    allFiles.forEach(async file => {
      await this.uploadFile(e, file);
    });
  };*/
  /*renderThumbnail = (loaded, total, file) => {
    return <Thumbnail loaded={loaded} key={file} total={total} file={file} />;
  };*/
  /*generateThumbnails =()=>{
 return this.state.files.map(this.renderThumbnail);
  }*/
  displayUploads = () => {
    const items = this.state.items;
    if (items.length > 0) {
      items
        .filter(item => !item.cancelled && !!item.file)
        .map(item => {
          return (
            <div key={item.index}>
              Item 1
              <ProgressBar percentage={item.progress} />
            </div>
          );
        });
    }
  };
  /*uploadFile = async (e, file) => {
    const thisComponent = this;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', this.uploadPreset);
    var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/auto/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Reset the upload progress bar
    document.getElementById('progress').style.width = 0;

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener('progress', function(e) {
      thisComponent.renderThumbnail(e.loaded, e.total, file);
      //var progress = Math.round((e.loaded * 100.0) / e.total);
      //document.getElementById('progress').style.width = progress + '%';

      //console.log(`fileuploadprogress data.loaded: ${e.loaded},  data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        var url = response.secure_url;
        console.dir(response);
        // Create a thumbnail of the uploaded image, with 150px width
        var tokens = url.split('/');

        tokens.splice(-2, 0, 'w_150,h_150,c_scale');

        tokens.splice(-4, 1);
        console.log(tokens);
        tokens.splice(-1, 1, `${response.public_id.split('/')[1]}.jpg`);
        var img = new Image(); // HTML5 Constructor
        img.src = tokens.join('/');
        img.alt = response.public_id;
        document.getElementById('gallery').appendChild(img);
      }
    };

    fd.append('upload_preset', this.uploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  };*/
  render() {
    return (
      <div>
        <div
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '10px',
            border: '1px solid grey',
            position: 'relative',
          }}
        >
          <ProgressBarWrapper
            percentage={20}
            style={{
              height: '5px',
              width: '240px',
              borderRadius: '50px',
              border: '1px solid #333',
              bottom: '0',
              position: 'absolute',
            }}
          />
        </div>
        <div
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '10px',
            border: '1px solid grey',
            position: 'relative',
          }}
        >
          <ProgressBarWrapper
            percentage={30}
            style={{
              height: '5px',
              width: '240px',
              borderRadius: '50px',
              border: '1px solid #333',
              bottom: '0',
              position: 'absolute',
            }}
          />
        </div>
        <label htmlFor="file">
          <input
            type="file"
            multiple
            id="file"
            name="file"
            placeholder="Upload Files"
            required
            onChange={this.uploadFiles}
          />{' '}
          {this.state.image && (
            <img width="200" src={this.state.image} alt="Upload Preview" />
          )}{' '}
        </label>{' '}
        {this.displayUploads()}
      </div>
    );
  }
}

export default Upload;
