import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";

import LogoBlack from "../img/logo-black.png";
import Visa from "../img/VISA.png";
import Mastercard from "../img/MASTERCARD.png";
import Paypal from "../img/PAYPAL.png";
import Bitcoin from "../img/BITCOIN.png";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src={LogoBlack} alt="logo" className="logo-black" />
            <p className="daitool-text">
              Daitool is the global reference site for high-quality, Japanese
              brand, industrial tools and supplies. We empower clients to build
              better, anywhere in the world.
            </p>
            <i id="youtube" class="bi bi-youtube"></i>
            <i id="linkedin" class="bi bi-linkedin"></i>
            <i id="twitter" class="bi bi-twitter"></i>
            <i id="facebook" class="bi bi-facebook"></i>
            <i id="instagram" class="bi bi-instagram"></i>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>QUICK LINKS</h4>
            <ui className="list-unstyled">
              <li>About us</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Brands</li>
              <li>Wholesale</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CUSTOMER AREA</h4>
            <ui className="list-unstyled">
              <li>My Account</li>
              <li>Deliveries</li>
              <li>Help Center (FAQs)</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ui>
          </div>
          <div className="col">
            <h4>CONTACT</h4>
            <p className="p-contact">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <p className="p-question">Have any questions?</p>
            <p className="p-number">+ 123 456 789</p>
            <Button className="btn-contact">CONTACT</Button>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            Daitool - &copy;{new Date().getFullYear()} All rights reserved
            <span id="payments">Payment</span>
            <img src={Visa} alt="Visa" />
            <img src={Mastercard} alt="Mastercard" />
            <img src={Paypal} alt="Paypal" />
            <img src={Bitcoin} alt="Bitcoin" />
          </p>
        </div>
      </div>
    </div>
  );
};
