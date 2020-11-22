import React, { useState } from "react";
import menu1 from "../../assets/menu/item-1.jpg";

const menuSections = [
  { id: "breakfast", title: "Breakfast" },
  { id: "meals", title: "Meals" },
  { id: "snacks", title: "Snacks" },
  { id: "desserts", title: "Desserts" },
  { id: "drinks", title: "Drinks" },
];

const items = ["Indian", "Chinese", "German", "Italian"];

const MenuSection = () => {
  const [currentTab, setCurrentTab] = useState(menuSections[0]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-restaurant-menu-area">
            <div className="mu-title">
              <span className="mu-subtitle">Discover</span>
              <h2>OUR MENU</h2>
              <i className="fa fa-spoon"></i>
              <span className="mu-title-bar"></span>
            </div>
            <div className="mu-restaurant-menu-content">
              <ul className="nav nav-tabs mu-restaurant-menu">
                {menuSections.map((menu) => (
                  <li
                    key={menu.id}
                    onClick={() => {
                      setCurrentTab(menu);
                    }}
                  >
                    <a href={`#${menu.id}`} data-toggle="tab">
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade in active" id="breakfast">
                  <div className="mu-tab-content-area">
                    <div className="row">
                      {["mu-tab-content-left", "mu-tab-content-right"].map((panel) => (
                        <div key={panel} className="col-md-6">
                          <div className={panel}>
                            <ul className="mu-menu-item-nav">
                              {items.map((item) => (
                                <li key={item}>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src={menu1}
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">{`${item} ${currentTab.title}`}</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $
                                        {((Math.random() * 1000) / 10).toFixed(
                                          2
                                        )}
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
