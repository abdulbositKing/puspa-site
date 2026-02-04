import Sitebar from "./components/sitebar/Sitebar";
import sitebarLogoImg from "./assets/Sitebar-logo.png";
import sitebarImg1 from "./assets/Sitebar-img1.png";
import sitebarImg2 from "./assets/Sitebar-img2.png";
import sitebarImg3 from "./assets/Sitebar-img3.png";
import sitebarImg4 from "./assets/Sitebar-img4.png";
import sitebarImg5 from "./assets/Sitebar-img5.png";
import sitebarProfileImg from "./assets/Sitebar-profile.png";

import Puspa from "./components/puspa/Puspa";

import Products from "./components/products/Products";
import productImg from "./assets/Products-img.png";

const productsData = [
  {
    img: productImg,
    title: "Ultimate BBQ Bliss Burger",
    price: "$13.99",
    items: "30 items",
  },

  {
    img: productImg,
    title: "Mushroom Madness Del...",
    price: "$14.49",
    items: "8 items",
  },

  {
    img: productImg,
    title: "Sizzling Southwest Fiest...",
    price: "$12.79",
    items: "4 items",
  },

  {
    img: productImg,
    title: "Truffle Infused Elegance...",
    price: "$15.99",
    items: "20 items",
  },

  {
    img: productImg,
    title: "Crispy Jalapeño Pepper C.",
    price: "$13.29",
    items: "20 items",
  },

  {
    img: productImg,
    title: "Greek Goddess Lamb Bu...",
    price: "$16.49",
    items: "14 items",
  },

  {
    img: productImg,
    title: "Aloha Teriyaki Pineapple...",
    price: "$14.99",
    items: "20 items",
  },

  {
    img: productImg,
    title: "Zesty Veggie Bean Bliss",
    price: "$11.99",
    items: "40 items",
  },

  {
    img: productImg,
    title: "Classic Bacon Cheddar M..",
    price: "$12.49",
    items: "10 items",
  },
];

const sitebarLinks = [
  {
    img: sitebarImg1,
    title: "Table",
  },

  {
    img: sitebarImg2,
    title: "Menus",
  },

  {
    img: sitebarImg2,
    title: "Order",
  },

  {
    img: sitebarImg3,
    title: "Promos",
  },

  {
    img: sitebarImg4,
    title: "Report",
  },

  {
    img: sitebarImg5,
    title: "Settings",
  },
];

const App = () => {
  return (
    <div>
      <Sitebar
        logoImg={sitebarLogoImg}
        sitebarImg1={sitebarImg1}
        sitebarImg2={sitebarImg2}
        sitebarImg3={sitebarImg3}
        sitebarImg4={sitebarImg4}
        sitebarImg5={sitebarImg5}
        profileImg={sitebarProfileImg}
        profileH2="Profile"
        links={sitebarLinks}
      />

      <Puspa
        PuspaTextH2="Puspa Food"
        PuspaTextP="Bekasi, South Jakarta • June 22, 2023"
        PuspaButton1="🍔 Burger"
        PuspaButton2="🍕 Pizza"
        PuspaButton3="🍟 French fries"
        PuspaButton4="🥤 Soda"
        PuspaButton5="🧃 Juice"
        PuspaButton6="🍗 Chicken"
      />

      <Products 
        productsData={productsData}
      />
    </div>
  );
};

export default App;
