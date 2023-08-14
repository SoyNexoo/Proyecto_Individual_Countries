/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import s from "./ActivityCard.module.css";
import { useEffect } from "react";
import { getCountry } from "../../redux/action";

const ActivityCard = ({ name, dificultad, duracion, temporada, Countries }) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((s) => s.allCountries);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);
  console.log(Countries);

  
  return (
    <div className={s.container}>
      <h2>{name}</h2>
      <h3>Dificultad: {dificultad}</h3>
      <h3>Duracion: {duracion}</h3>
      <h3>Temporada: {temporada}</h3>
      {Countries.map((ele) => {
        const countryId = allCountries.find((country) => country.id === ele.id);
        return(
            <>
            <img src={countryId.flag} className={s.img} key={countryId.id}></img>
            </>
        )
      })}
    </div>
  );
};
export default ActivityCard;
