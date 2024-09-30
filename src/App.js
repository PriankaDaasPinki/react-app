// import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/style.css";
import Card, { Header, Card2Cart } from "./components/Card.js";
import Navbar from "./components/Navbar";
// import Header from "./components/Header.js";
import ProductList from "./components/ProductList.js";
import Data from "./data.js";
// import productImage from "";
// import Footer from './components/Footer.js/index.js';

function App() {
  let items = [];
  items = Data.map((item) => {
    console.log('item');
    console.log(item);
    const {id: id, Name: name, Description: des} = item;
    return(
    <Card
      key={id}
      titleText={name}
      descriptionText={des}
    />
  )});

  console.log(items);

  return (
    <>
      <Navbar />
      <Header textH="Product List" />

      <div className="row itemListContainer">{items}</div>

      <main className="container mt-2">
        <Header textH="List of Cart Product" />
        <Card2Cart
          titleText="Your Product"
          descriptionText={<ProductList productModule={Data} />}
        />

        {/* <div className="cardProductList">
          <div className="cardTitle"></div>
          <div className="cardBody">
            
          </div>
          <div className="cardFooter">
            Copyright<sup> © </sup>Prianka's World
          </div>
        </div> */}
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
