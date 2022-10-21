import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-container">
      <div
        className="menu-link"
        style={{ display: "flex", flexdirection: "row-reverse" }}
      >
        <ul>
          <li>
            <Link
              to="/Fitness"
              style={{
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Fitness
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/Nutration"
              style={{
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Nutrition
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/Gyms"
              style={{
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Gyms
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/BecomeWFTPartner"
              style={{
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Become WFT Partner
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/AboutUs"
              style={{
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              About Us
            </Link>
          </li>
        </ul>
        <button>Login</button>
        
      </div>
    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F003%2F495%2F787%2Fsmall%2Ffitness-gym-coaching-package-horizontal-banner-template-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fgym-banner&tbnid=MKay1PBSzVm-eM&vet=12ahUKEwj-j5PT6vD6AhWShNgFHV33CdkQMygQegUIARD7AQ..i&docid=4mbeeC7tBSYW1M&w=446&h=200&q=gym%20banner%20images&ved=2ahUKEwj-j5PT6vD6AhWShNgFHV33CdkQMygQegUIARD7AQ" height={200} width={500} />
    </div>
  );
}

export default Navbar;
