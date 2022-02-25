import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Sucesssful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={3}
          />
          <Product
            title="Samsung Galaxy Buds Pro"
            price={199.99}
            image="https://m.media-amazon.com/images/I/51TkK-s68qS._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            title="Apple Watch Series 7 | GPS + Cellular, 41mm Silver Stainless Steel Case"
            price={498.99}
            image="https://m.media-amazon.com/images/I/71-i7pbrhnL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={729.99}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={39.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
