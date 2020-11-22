import React from "react";
import logo from "../../assets/logo.png";

const navItems = [
  { id: "#mu-slider", title: "HOME" },
  { id: "#mu-about-us", title: "ABOUT US" },
  { id: "#mu-restaurant-menu", title: "MENU" },
  { id: "#mu-reservation", title: "RESERVATION" },
  { id: "#mu-gallery", title: "GALLERY" },
  { id: "#mu-chef", title: "OUR TEAM" },
  { id: "#mu-latest-news", title: "BLOG " },
  { id: "#mu-contact", title: "CONTACT" },
];

const navPageItems = [
  { id: "blog-archive", title: "BLOG" },
  { id: "blog-single", title: "BLOG DETAILS" },
  { id: "404", title: "404 PAGE" },
];

const DisplayNavItems = ({ navItems }) =>
  navItems.map((navItem) => (
    <li key={navItem.id}>
      <a href={navItem.id}>{navItem.title}</a>
    </li>
  ));

const Navigation = () => {
  return (
    <nav className="navbar navbar-inverse mu-main-navbar" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo img" />
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul id="top-menu" className="nav navbar-nav navbar-right mu-main-nav">
            <DisplayNavItems navItems={navItems} />
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                PAGE <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <DisplayNavItems navItems={navPageItems} />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
