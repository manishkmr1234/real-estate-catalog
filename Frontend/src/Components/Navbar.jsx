import { useContext, useState } from "react";
import { temp } from "../Context/Context";
import Logout from "./Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "../Styles/navbar.css";

export const Navbar = () => {
  const { userinfo, setUserInfo } = useContext(temp);
  let user = JSON.parse(localStorage.getItem("user"))._id;
  console.log(userinfo);
  const [display, setDisplay] = useState(false);
  const handleLogout = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <div className="nav">
        <div>USER ID: {userinfo?.customId ? "a" : "b"}</div>
        <div className="username">
          <div>
            <PermIdentityIcon />
          </div>
          <div className="user-name">
            {userinfo?.mailID}{" "}
            <ArrowDropDownIcon
              className="user-name"
              sx={{ fontSize: 30 }}
              onClick={handleLogout}
            />
            {display ? <Logout /> : null}
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};
