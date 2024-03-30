import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyComponent from './mycomponent';
import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={"holder.js/100px270"} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
       
      </Card.ImgOverlay>
    </Card>
  );
}

function App() {
  return (
    <div className="App">
      
      <MyComponent />
      <ImgOverlayExample/>
    </div>
  );
}

export default App;
