import Link from 'next/link';
import styled from 'styled-components';

import Thumbnail from '../components/Thumbnail';

class Upload extends React.Component {
  uploadPreset = 'chingu';
  cloudName = 'rachnaban';
  xhrs = [];
  state = {items: []};

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
    this.uploadFile(item.file, (progress, response) =>
      this.updateFileProgress(item.index, progress, response),
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
    //todo
    //this.setState({items: newItems}, this.clearIfAllCompleted);
    this.setState({items: newItems});
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
        console.dir(xhr.response);
        const response = JSON.parse(xhr.response);
        console.log(response);
        var tokens = response.secure_url.split('/');
        tokens.splice(-2, 0, 'w_150,h_150,c_scale');
        tokens.splice(-4, 1);
        tokens.splice(-1, 1, `${response.public_id.split('/')[1]}.jpg`);
        progressCallback(100, {
          src: tokens.join('/'),
          alt: response.public_id,
          downloadUrl: response.secure_url,
        });
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

  displayUploads = () => {
    const items = this.state.items;
    if (items.length > 0) {
      return <Thumbnail items={items} />;
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="file">
          <input
            type="file"
            multiple
            id="file"
            name="file"
            placeholder="Upload Files"
            required
            onChange={this.uploadFiles}
          />
        </label>
        {this.state.items.length > 0 && (
          <Thumbnail
            items={this.state.items}
            onCancelUpload={this.cancelFile}
          />
        )}
      </div>
    );
  }
}

export default Upload;
