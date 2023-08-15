/* eslint-disable react/prop-types */
// import React from "react";
import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar/SearchBar";
import s from "./Home.module.css";
export default function Home() {
  return (
    <div className={s.nav}>
      <div className={s.navigators}>
      {/* {`${s.links} ${s.homeLink}`} */}
        <NavLink to="/" className={({isActive}) => isActive ? `${s.links} ${s.homeLink} ${s.activeLink}` : s.links } activeClassName={s.activeLink}>
          HOME
        </NavLink>
      </div>
      <p className={s.p}>
        COUNTRIES APP
      </p>
      <div className={s.linksContainer}>
        <div className={s.navigators}>
          <NavLink to="/nations" className={({isActive}) => isActive ? `${s.links} ${s.activeLink}` : s.links } activeClassName={s.activeLink}>
            COUNTRIES
          </NavLink>
        </div>
        <div className={s.navigators}>
          <NavLink  activeClassName={s.activeLink} to="/activity" className={({isActive}) => isActive ? `${s.links} ${s.activeLink}` : s.links } >
            ACTIVITIES
          </NavLink>
        </div>
        <div className={s.navigators}>
          <NavLink to="/create" className={({isActive}) => isActive ? `${s.links} ${s.activeLink}  ${s.create}` : s.links }>
            ADD ACTIVITY
          </NavLink>
        </div>
       
      </div>
      {/* <SearchBar  /> */}
    </div>
  );
}
