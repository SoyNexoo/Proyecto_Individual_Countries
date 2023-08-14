import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import s from "./Detail.module.css";
export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const apiInfo = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/countries/${id}`);
        console.log(data);
        setData(data);
        setActivity(data.Activities);
        console.log(activity);
      } catch (error) {
        console.log(error);
      }
    };
    apiInfo();
  }, [activity, id]);

  const yetActivity = () => {
    if (!activity.length) {
      return (
        <>
          <h2>No se encontraron actividades</h2>
          <Link to="/create">

            <button>Crea una aqui!</button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <h2>Actividades:</h2>
          <div className={s.cards}>
            {activity.map((actividad) => {
              return <h3 key={actividad.id}>{actividad.name}</h3>;
            })}
          </div>
        </>
      );
    }
  };

  console.log(data);

  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.content}>
          <img src={data.flag} className={s.img} />

          <div className={s.info}>
            <h2>{data.name}</h2>
            <h3>Continente: {data.continente}</h3>
            <h3>Capital: {data.capital}</h3>
            <h3>Poblacion: {data.poblacion}</h3>
            <h3>Lenguas: {data.lenguas}</h3>
            <div style={{ background: 'black', paddingBottom: '2px', width: '95%', marginTop: '20px' }}></div>

            <div className={s.activities}>{yetActivity()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
