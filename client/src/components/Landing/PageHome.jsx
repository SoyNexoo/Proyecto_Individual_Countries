/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from "react";
import s from "./PageHome.module.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
export const Landing = () => {
  const [typing, setTyping] = useState(false);
  const [titleTyped, setTitleTyped] = useState("");
  const titleType = "HENRYPAISES";

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTyping(0);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);
  
  const startTyping = (index) => {
    if (index < titleType.length) {
      setTitleTyped((el) => el + titleType.charAt(index));
      setTimeout(() => {
        startTyping(index + 1);
      }, 200);
    } else {
      setTyping(true);
    }
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6554/6554183.png"
          alt="Icon"
          className={s.images}
        />
        <div className={s.left}>
          <h1 className={typing ? `${s.head} ${s.typing_animation}` : s.head}>
            {titleTyped}
          </h1>
          <p className={s.subText}>
            Mas de 200 paises con toda la informacion que necesitabas saber!
          </p>
        </div>
        <Link to="/nations">
          <button className={s.button}>INGRESA AQUI</button>
        </Link>
      </div>
    </div>
  );
};
