import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    Name: "Phone",
    Model: "V109",
    Price: 20990,
    Image: "https://www.shopz.com.bd/wp-content/uploads/2022/04/Vivo-Y33s-8-GB-RAM-128-GB-ROM.jpg",
    Year: 2022,
    Description: "Vivo Y33s comes with a 6.58-inch touchscreen display offering a resolution of 1080x2408 pixels, an octa-core MediaTek Helio G80 processor.",
    Quantity: 1,
  },
  {
    id:uuid(),
    Name: "Backpack",
    Model: "Arctic Hunter",
    Price: 3000,
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WWWvUW23jT6DmEQnEnhvY7fsdlpitANV4A&s",
    Year: 2023,
    Description: "High Quality Multifunctional Adventure Business Backpack.",
    Quantity: 2,
  },
  {
    id:uuid(),
    Name: "Watch",
    Model: "Amazfit Bip 3",
    Price: 5000,
    Image: "https://m.media-amazon.com/images/I/71mQODFBoBL.jpg",
    Year: 2024,
    Description: "Amazfit Bip3 – the 2022 upgraded smartwatch that packs a 1.69\" super-sized color screen into its super slim and light body with up to 14 days of battery life.",
    Quantity: 3,
  },
  {
    id:uuid(),
    Name: "Laptop",
    Model: "Asus",
    Price: 40000,
    Image: "https://i5.walmartimages.com/asr/db629639-f86b-4ff8-b6a8-ba760bf49ca0.64930ecedf6f5e93b64740f6bd1e7a90.jpeg",
    Year: 2016,
    Description: "The P series notebooks have a professional look with brushed-hairline textures and scratch-resistant coating LCD.",
    Quantity: 1,
  }
];

export default data;

