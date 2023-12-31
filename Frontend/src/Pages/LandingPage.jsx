import { useEffect, useState } from "react";
import { Sidebar } from "../Components/Sidebar";
import "../Styles/landing.css";
import { Home } from "./Home";
import { Navbar } from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Landing = () => {
  const [basicInfo, setBasicInfo] = useState();
  const [PPID, setPPID] = useState();
  const [search, setSeacrhResult] = useState(null);
  const Search = async () => {
    let data = basicInfo;
    data.forEach((data) => {
      if (data._id === PPID.toUpperCase()) setSeacrhResult([data]);
    });
  };
  const fetchData = () => {
    let userid = JSON.parse(localStorage.getItem("user"))._id;
    fetch(
      `https://real-estate-catalog-gp8x.onrender.com/get/property/${userid}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setBasicInfo(data?.basicInfo);
        // console.log(basicInfo)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
    Search();
  }, []);
  return (
    <div>
      <div className="landing">
        <Sidebar />

        <div>
          <Navbar />

          <header className="header">
            <div class="search-container">
              <input
                className="inp-ser"
                onChange={(e) => {
                  setPPID(e.target.value);
                }}
                value={PPID}
                type="text"
                placeholder="Search PPD ID"
                name="search"
              />
              <button className="ser-btn" onClick={Search} type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div>
              <Link to="/form">
                <button className="add-prop">+ Add Property</button>
              </Link>
            </div>
          </header>
          {/* <Property basicInfo={basicInfo} /> */}
          <Home
            basicInfo={search == null ? basicInfo : search}
            fetchData={fetchData}
          />
        </div>
      </div>
    </div>
  );
};
