import React from "react";
import { cardHeader as Header } from "../components/Card";

const AboutUs = () => {
  return (
    <main className="flex-grow-1 p-4" id="main-content">
      <div className="pt-5 mt-5">
        <h1>
          <Header textH="About Us" />
        </h1>
        <p className="lead">
          Welcome to Prianka's World – where nature’s beauty meets quality
          products! Discover our passion for capturing moments in nature and
          bringing you the best in milk and electronics.
        </p>
        <hr />
        <main className="container mt-2 p-0">
          <div className="row justify-content-evenly m-0 mt-4">
            <h4>Who We Are</h4>
            <p className="text-center">
              Prianka's World is a unique blend of nature and innovation. Born
              from a love for capturing the beauty of nature – from serene
              rivers to vibrant flowers – we’re passionate about sharing our
              vision with the world. Our gallery showcases a wide variety of
              nature’s finest moments, offering a peaceful escape for visitors.
            </p>

            <div>
              <h4 className="mt-5">What We Do</h4>
              <p className="text-center">
                In addition to sharing images of nature’s wonders, we also bring
                quality products to our customers. Prianka's World proudly
                offers:
              </p>
              <div className="text-start p-5 pt-0">
                <ul>
                  <li>
                    <h6>Milk Products</h6>
                    <p>
                      Fresh and high-quality milk products delivered straight
                      from local sources to your home, ensuring purity and
                      health for you and your family.
                    </p>
                  </li>
                  <li>
                    <h6>Electronics</h6>
                    <p>
                      Explore our selection of electronics that combine quality
                      and affordability, handpicked to meet your needs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h4>Our Mission</h4>
            <p className="text-center">
              Our mission at Prianka's World is to blend beauty, nature, and
              quality into everyday life. Whether through our nature gallery or
              our curated products, we aim to bring a touch of peace, joy, and
              reliability to our customers.
            </p>

            <h4>Get In Touch</h4>
            <p className="text-center">
              We’d love to connect with you! Feel free to reach out if you have
              questions about our products, need support, or simply want to know
              more about what we do.
            </p>
          </div>
        </main>
      </div>
    </main>
  );
};

export default AboutUs;
