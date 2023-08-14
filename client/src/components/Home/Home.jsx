/* eslint-disable react/prop-types */
// import React from "react";
import {  NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar/SearchBar";
import s from "./Home.module.css"
  export default function Home () {
    return (
      <div className={s.nav}>
        <div className={s.navigators}>
        <NavLink to="/" className={s.links}>HOME</NavLink>
        </div>
        <div className={s.navigators}>
        <NavLink to="/nations" className={s.links}>COUNTRIES</NavLink>
        </div>
        <div className={s.navigators}>
        <NavLink to="/activity" className={s.links}>ACTIVITIES</NavLink>
        </div>
        <div className={s.navigators}>
        <NavLink to="/create" className={`${s.links} ${s.create}`}>ADD ACTIVITY</NavLink>
        </div>
        {/* <SearchBar  /> */}
      </div>
    );
  }
