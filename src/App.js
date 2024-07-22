import React from "react";
import "./App.css";
import logoEuStays from "./image/eustayslogo.svg";

const App = () => {
  return (
    <div className="LandingPage">
      <div className="mobView">
        <div className="coming-soon-container-mob">
          <div className="overlay-mob">
            <div className="logoEuStays-mob">
              <img
                src={logoEuStays}
                style={{ width: `46px`, height: `30px` }}
                alt="logo"
              />
            </div>
            <div className="content-mob">
              <p className="firstText-mob">
                We are coming
                <br />
                soon! Stay tuned.
              </p>
              <p className="secondText-mob">
                Students can now enjoy curated stays
                <br />
                across Europe with EU Stays.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="deskTopView">
        <div className="coming-soon-container">
          <div className="overlay">
            <img className="logoEuStays" src={logoEuStays} alt="logo" />
            <div className="content">
              <p className="firstText">
                We are coming
                <br />
                soon! Stay tuned.
              </p>
              <p className="secondText">
                Students can now enjoy curated stays
                <br />
                across Europe with EU Stays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
