import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutUsContent } from "../../redux/actions";
import img1 from "../../assets/about-us/abtus-img-1.png";
import img2 from "../../assets/about-us/abtus-img-2.png";
import img3 from "../../assets/about-us/abtus-img-3.png";
import img4 from "../../assets/about-us/abtus-img-4.png";
import img5 from "../../assets/about-us/abtus-img-5.png";

const AboutUs = () => {
  const content = useSelector((state) => state?.aboutus?.content);

  const dispatch = useDispatch();
  useEffect(() => {
    !content && dispatch(getAboutUsContent());
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-about-us-area">
            <div className="mu-title">
              <span className="mu-subtitle">Discover</span>
              <h2>ABOUT US</h2>
              <i className="fa fa-spoon"></i>
              <span className="mu-title-bar"></span>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mu-about-us-left">
                  <ul>
                    {content &&
                      content.map((ele, i) => (
                        <li key={`${i}_${ele}`}>{ele}</li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  id="aboutUsCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {[img1, img2, img3, img4, img5].map((image, index) => (
                      <div
                        key={`${index}_about-us-image`}
                        style={{ transform: "opacity 500ms linear 0s" }}
                        className={`item ${index === 0 ? "active" : ""}`}
                      >
                        <img
                          src={image}
                          alt={"Alt"}
                          style={{ width: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mu-about-us-right">
                  <ul className="mu-abtus-slider"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
