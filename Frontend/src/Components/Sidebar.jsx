import "../Styles/sidebar.css";
import logo from "../Assets/logo.png"
import assistance from "../Assets/Sidebar/assistance.svg";
import property from "../Assets/Sidebar/property.svg";
import propertyViews from "../Assets/Sidebar/propertyViews.svg";
import sentInterest from "../Assets/Sidebar/sentInterest.svg";
import recievedInterest from "../Assets/Sidebar/recievedInterest.svg";
import tariffPlan from "../Assets/Sidebar/tariffPlan.svg";

export const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="logo-side">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo-icon">
        <div className="side-flex" id="prop-icon">
          <div className="img">
            <img src={property} alt="property" />
          </div>
          <p>Property</p>
        </div>
        <div className="side-flex">
          <div className="img">
            <img src={assistance} alt="property" />
          </div>
          <p>Assistance</p>
        </div>
        <div className="side-flex">
          <div className="img">
            <img src={recievedInterest} alt="property" />
          </div>
          <p>Recieved Interest</p>
        </div>
        <div className="side-flex">
          <div className="img">
            <img src={sentInterest} alt="property" />
          </div>
          <p>Sent Interest</p>
        </div>
        <div className="side-flex">
          <div className="img">
            <img src={propertyViews} alt="property" />
          </div>
          <p>Property Views</p>
        </div>
        <div className="side-flex">
          <div className="img">
            <img src={tariffPlan} alt="property" />
          </div>
          <p>Traffic Plan</p>
        </div>
      </div>
    </div>
  );
};
