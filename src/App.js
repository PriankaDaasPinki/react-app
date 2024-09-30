// import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/style.css";
import Card, { cardHeader as Header, Card2Cart } from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";
// import Header from "./components/Header.js";
import ProductList from "./components/ProductList.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Data from "./data.jsx";
// import productImage from "";
// import Footer from './components/Footer.js/index.js';

function App() {
  let items = [];
  items = Data.map((item) => {
    console.log("item");
    console.log(item);
    const { id, Name: name, Description: des, Image: img } = item;
    return <Card key={id} titleText={name} descriptionText={des} Image ={img} />;
  });

  console.log(items);

  return (
    <>
      <div className="row">
        <div className="col-md-2 pt-5">
          <Navbar />
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="row itemListContainer">
            <Header textH="Product List" />
            {items}
          </div>
          <main className="container mt-2">
            <Header textH="List of Cart Product" />
            <Card2Cart
              titleText="Your Product"
              descriptionText={<ProductList productModule={Data} />}
            />
          </main>
          {/* <Footer/> */}
        </div>
      </div>
    </>
  );
}

export default App;
