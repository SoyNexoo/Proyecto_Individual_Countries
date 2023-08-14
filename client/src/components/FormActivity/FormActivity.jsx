import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, addActivity } from "../../redux/action";
import s from "./FormActivity.module.css";
import validation from "./validation";

export default function FormActivity() {
  const [data, setData] = useState({
    name: "",
    dificultad: 0,
    duracion: 0,
    temporada: "",
    countries: [],
  });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChange = (payload) => {
    const { value, name } = payload.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);

    const errorDetect = validation({
      ...data,
      [name]: value,
    });
    setError((prevErr) => ({
      ...prevErr,
      [name]: errorDetect[name],
    }));
  };

  const handleCountry = (event) => {
    setData({
      ...data,
      countries: [...data.countries, event.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addActivity(data));
  };

  const allCountries = useSelector((state) => state.sortCountries);
  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  const deleteImg = (index) => {
    setData({
      ...data,
      countries: data.countries.filter((country) => country !== index.id),
    });
  };
  

  console.log(data);
  console.log(allCountries);
  return (
    <div className={s.create_form}>
      <div className={s.form_header}>
        <div className={s.text}>Create a Activity!</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={s.group}>
          <label> Nombre: </label>
          <input
            onChange={handleChange}
            value={data.name}
            type="text"
            name="name"
            className={s.name}
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div className={s.group}>
          <label>Dificultad</label>
          <input
            onChange={handleChange}
            value={data.dificultad}
            type="number"
            name="dificultad"
            min="1"
            max="5"
          />
          {error.dificultad && <p>{error.dificultad}</p>}
        </div>
        <div className={s.group}>
          <label>Duracion</label>
          <input
            onChange={handleChange}
            value={data.duracion}
            type="number"
            name="duracion"
          />
          {error.duracion && <p>{error.duracion}</p>}
        </div>
        <div className={s.group}>
          <label>Temporada</label>
          <select
            onChange={handleChange}
            value={data.temporada}
            name="temporada"
          >
            <option value={"default"}>Season</option>
            <option value={"Verano"}>Verano</option>
            <option value={"Otoño"}>Otoño</option>
            <option value={"Invierno"}>Invierno</option>
            <option value={"Primavera"}>Primavera</option>
          </select>
          {error.temporada && <p>{error.temporada}</p>}
        </div>
        <div className={s.group}>
          <label>Paises</label>

          <select onChange={handleCountry} name="countries">
            {allCountries.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.emoji + " " + country.name}
                </option>
              );
            })}
          </select>
          {error.countries && <p>{error.countries}</p>}
        </div>
        <div className={s.group}>
          {data.countries.map((ele) => {
            
            const countryId = allCountries.find(
              (country) => country.id === ele
            );
            console.log(data.countries);
            return (
              <>
              <img src={countryId.flag} className={s.img} key={countryId.id} />
              <button type="button" onClick={() => deleteImg(countryId)}  className={s.button}>X</button>
              </>
            );
          })}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
