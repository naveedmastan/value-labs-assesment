import React, { useState, useEffect } from "react";
import menu1 from "../../assets/menu/item-1.jpg";

import { getMenuContent } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";

const menuSections = [
  { id: "breakfast", title: "Breakfast" },
  { id: "meals", title: "Meals" },
  { id: "snacks", title: "Snacks" },
  { id: "desserts", title: "Desserts" },
  { id: "drinks", title: "Drinks" },
];

// const items = ["Indian", "Chinese", "German", "Italian"];

const MenuSection = () => {
  const [currentTab, setCurrentTab] = useState(menuSections[0]);
  const menuData = useSelector((state) => state?.menu?.menuData);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(savedForms);
    dispatch(getMenuContent(currentTab.id));
  }, [currentTab]);

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
                    key={menu.id + currentTab.id}
                    onClick={() => {
                      setCurrentTab(menu);
                    }}
                    className={currentTab.id === menu.id ? "active" : ""}
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
                      {["mu-tab-content-left", "mu-tab-content-right"].map(
                        (panel) => (
                          <div key={panel} className="col-md-6">
                            <div className={panel}>
                              <ul className="mu-menu-item-nav">
                                {menuData?.length > 0 ? (
                                  menuData.map((item) => (
                                    <li key={item.name + currentTab.id}>
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
                                            <a href="#">{`${item.name.toUpperCase()}`}</a>
                                          </h4>
                                          <span className="mu-menu-price">
                                            ${item.price}
                                          </span>
                                          <p>{item.description}</p>
                                        </div>
                                      </div>
                                    </li>
                                  ))
                                ) : (
                                  <li>No Data Available</li>
                                )}
                              </ul>
                            </div>
                          </div>
                        )
                      )}
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
