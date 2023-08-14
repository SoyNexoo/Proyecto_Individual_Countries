import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, filterBySeason, getActivity, getCountry, sortActivity } from "../../redux/action";
import ActivityCard from "../ActivityCard/ActivityCard";

const Activity = () => {

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.allActivities);
  
  useEffect(() => {
    dispatch(getActivity())
    dispatch(getCountry())
  }, [dispatch, activities]);
  
  // console.log(activitiesState)


  const handleSortByName = (order) => {
    const {value} = order.target
    dispatch(sortActivity(value))
  }

  const handleFilterBySeason = (season) => {
    const {value} = season.target
    dispatch(filterBySeason(value))
  }
  const showCountries = (actividad) =>{

    const newAct =actividad.Countries.map((elem) =>{
      
      return elem
    })
    return newAct
  }
  // console.log(activities)
  
  
    const handlerDelete = (id) =>{
      dispatch(deleteActivity(id))
      dispatch(getActivity())
    }

  return(
    <div className="" >
      <select onChange={handleSortByName}>
        <option value="all">NONE</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
        <select className="" onChange={handleFilterBySeason} >
          <option value="all">All</option>
          <option value="Invierno">Invierno</option>
          <option value="Verano">Verano</option>
          <option value="Primavera">Primavera</option>
          <option value="Otoño">Otoño</option>
        </select>

        {activities.map((activity) => (
          
       <>   
          
          <button onClick={() => handlerDelete(activity.id)}>X</button>
          <ActivityCard
            key={activity.id}
            id={activity.id}
            name={activity.name}
            temporada={activity.temporada}
            duracion={activity.duracion}
            dificultad={activity.dificultad}
            Countries={showCountries(activity)}
          />
          
          </>
            ))}
    </div>
  )
};

export default Activity