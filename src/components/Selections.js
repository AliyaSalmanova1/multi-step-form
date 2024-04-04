import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainSection from "./Main.js"

function SelectionBox() {

  const { pathname } = useLocation();

  return (
    <div className="page">
      <div className="nav-container">
        <div className="nav">
          <NavLink to="/">
            <div className="circle">1</div>
            <div className="link-text">
              <p>step 1</p>
              <h3>your info</h3>
            </div>
          </NavLink>
          <NavLink to="/plan">
            <div className="circle" >2</div>
            <div className="link-text">
              <p>step 2</p>
              <h3>select plan</h3>
            </div>
          </NavLink>
          <NavLink to="/add-ons">
            <div className="circle">3</div>
            <div className="link-text">
              <p>step 3</p>
              <h3>add-ons</h3>
            </div>
          </NavLink>
          <NavLink to="/summary">
            <div className="circle">4</div>
            <div className="link-text">
              <p>step 4</p>
              <h3>summary</h3>
            </div>
          </NavLink>
        </div>
      </div>
      <MainSection />
    </div>
  );
}

export default SelectionBox;

