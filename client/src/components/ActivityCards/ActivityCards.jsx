import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteActivity,
  filterBySeason,
  getActivity,
  getCountry,
  sortActivity,
} from "../../redux/action";
import ActivityCard from "../ActivityCard/ActivityCard";
import s from "./ActivityCards.module.css";

import NotFound from "../NotFound/NotFound";

const Activity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);



  useEffect(() => {
    dispatch(getActivity());
    dispatch(getCountry());
  }, [dispatch]);

  // console.log(activitiesState)

  const handleSortByName = (order) => {
    const { value } = order.target;
    console.log(value);
    dispatch(sortActivity(value));
  };

  const handleFilterBySeason = (season) => {
    const { value } = season.target;
    dispatch(filterBySeason(value));
  };
  const showCountries = (actividad) => {
    const newAct = actividad.Countries.map((elem) => {
      return elem;
    });
    return newAct;
  };
  // console.log(activities)



  const handlerDelete =  (id) => {
    dispatch(deleteActivity(id));
    dispatch(getActivity());
    console.log(id)
  };
  console.log(activities)

  return (
    <div className={s.container}>
      <div className={s.selectors}>
        <select onChange={handleSortByName}>
          <option value="all">NONE</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select onChange={handleFilterBySeason}>
          <option value="all">All</option>
          <option value="Invierno">Invierno</option>
          <option value="Verano">Verano</option>
          <option value="Primavera">Primavera</option>
          <option value="Otoño">Otoño</option>
        </select>
      </div>
      {activities.length ? (
        <div className={s.cards}>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              name={activity.name}
              temporada={activity.temporada}
              duracion={activity.duracion}
              dificultad={activity.dificultad}
              Countries={showCountries(activity)}
              onChange={() => handlerDelete(activity.id)}
            />
          ))}
        </div>
      ) :
      <div>
        <NotFound />
        </div>
      }
    </div>
  );
};

export default Activity;
