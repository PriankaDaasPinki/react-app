import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    Name: "Phone",
    Model: "V109",
    Price: 20990,
    Year: 2022,
    Description: "The phone comes with a 6.58-inch touchscreen display offering a resolution of 1080x2408 pixels. Vivo Y33s is powered by an octa-core MediaTek Helio G80 processor. It comes with 8GB of RAM. The Vivo Y33s runs Android 11 and is powered by a 5000mAh non-removable battery.",
    Quantity: 1,
  },
  {
    id:uuid(),
    Name: "Backpack",
    Model: "Arctic Hunter",
    Price: 3000,
    Year: 2023,
    Description: "High Quality Multifunctional Adventure Business Backpack.",
    Quantity: 2,
  },
  {
    id:uuid(),
    Name: "Watch",
    Model: "Amazfit Bip 3",
    Price: 5000,
    Year: 2024,
    Description: "Amazfit Bip 3–the 2022 upgraded smartwatch that guides you toward a healthier, more active, more connected life. The watch packs a 1.69\" super-sized color screen into its super slim and light body for a clear, exquisite viewing experience. Powerful battery to deliver up to 14 days of battery life.",
    Quantity: 3,
  },
  {
    id:uuid(),
    Name: "Laptop",
    Model: "Asus",
    Price: 40000,
    Year: 2016,
    Description: "The P series notebooks have a professional look with brushed-hairline textures and scratch-resistant coating LCD. They are ergonomically designed and feature a seamless one-piece Chiclet keyboard with precise key alignment for ultimate comfort. The anti-glare display has a matte screen surface that prevents unwanted reflections and helps reduce eye fatigue.",
    Quantity: 1,
  }
];

export default data;

