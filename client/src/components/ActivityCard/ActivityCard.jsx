/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import s from "./ActivityCard.module.css";
import { useEffect } from "react";
import { getCountry } from "../../redux/action";
import { Link } from "react-router-dom";

const ActivityCard = ({ name, dificultad, duracion, temporada, Countries, onChange }) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((s) => s.allCountries);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);


  
  return (
    <div className={s.container}>
      <h2>{name}</h2>
      <div className={s.line_black}></div>
      <div className={s.info}>
      <h3>Dificultad: {dificultad}</h3>
      <h3>Duracion: {duracion}</h3>
      <h3>Temporada: {temporada}</h3>
      </div>
      <div className={s.imagesFlag}>
      {Countries.map((ele) => {
        let countryId = allCountries.find((country) => country.id === ele.id);
        if(countryId){

          return(
              <>
              <Link to={`/detail/${countryId.id}`}>
              <img src={countryId.flag} className={s.img} key={countryId.id}></img>
              </Link>
              </>
          )
        }
      })}
      </div>
      <button onChange={onChange}>X</button>

    </div>
  );
};
export default ActivityCard;
