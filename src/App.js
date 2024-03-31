import Store from './components/Store'
import './App.css';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([{
    name: "Apple BYZ S852I",
    price: "2927",
    color: "4.7",
    img: "images/93f0.png"
  }, {
    name: "Apple EarPods",
    price: "2327",
    color: "4.5",
    img: "images/a9be.png"
  }, {
    name: "Apple EarPods",
    price: "2327",
    color: "4.5",
    img: "images/d80f.png"
  }, {
    name: "Apple AirPods",
    price: "9527",
    color: "4.7",
    img: "images/10c8.png"
  }, {
    name: "GERLAX GH-04",
    price: "6527",
    color: "4.7",
    img: "images/9d6b.png"
  }, {
    name: "BOROFONE BO4",
    price: "7527",
    color: "4.7",
    img: "images/02ee.png"
  }]);
  return (
    <div className="container">
      <h1>QPICK</h1>
      <div className="window">
        <Store products={products}/>
      </div>
    </div>
  );
}

export default App;
