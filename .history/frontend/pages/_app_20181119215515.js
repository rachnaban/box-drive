import App, {Container} from 'next/app';
class MyApp extends App {}
render(){
    const {Component} = this.props;
    return(
        <Container>
            <p>I am on evervy page</p>
            <Component/>
        </Container>
    );
}