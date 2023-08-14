/* eslint-disable react/prop-types */
import s from "./Card.module.css";
import { Link } from "react-router-dom";
export const Card = ({
  name,
  id,
  capital,
  continente,
  flag,
  poblacion,
  lenguas,
}) => {
  // console.log("holaaaaaaaaaaa", name)
  const nameLength = () => {
    if (name.length > 15) {
      const nameCut = name.split("").splice(0, 15).join("");
      return <h2 className={s.nameCountry}>{nameCut}... </h2>;
    }
    return <h2 className={s.nameCountry}>{name}</h2>;
  };

  return (
    <div className={s.container}>
      <img className={s.img} src={flag} alt={`Flag of ${name}`} />

      {nameLength()}

      <h3 className={s.continentCountry}>Continente: {continente}</h3>

      <Link className={s.info} to={`/detail/${id}`}>
        More info!
      </Link>
    </div>
  );
};
