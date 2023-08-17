/* eslint-disable react/prop-types */
import s from "./Cards.module.css";
import { Card } from "../Card/Card";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  filterByActivity,
  filterByCont,
  filterByPopu,
  getActivity,
  getCountry,
  sortedByName,
} from "../../redux/action";
import SearchBar from "../Home/SearchBar/SearchBar";
import NotFound from "../NotFound/NotFound";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);

  const handleSortByName = (order) => {
    const selected = order.target.value;
    setCurrentPage(0);

    dispatch(sortedByName(selected));
    console.log("esta andando");
  };

  const handleFilterByCont = (continent) => {
    const selected = continent.target.value;
    dispatch(filterByCont(selected));
    setCurrentPage(0);
  };
  const handleFilterByPopu = (population) => {
    const selected = population.target.value;
    setCurrentPage(0);
    dispatch(filterByPopu(selected));
  };

  const handleFilterByActivities = (e) => {
    dispatch(filterByActivity(e.target.value));
  };

  const totalPage = Math.ceil(allCountries.length / 10);

  function getCountriesForPage() {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    return allCountries.slice(startIndex, endIndex);
  }

  function nextHandler() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage - 1));
  }

  function prevHandler() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  }

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getActivity());
  }, [dispatch]);

  console.log(allActivities);

  const countryPerPages = getCountriesForPage();
  const botones = () => {
    return (
      <div className={s.paginationButtons}>
        <button onClick={() => setCurrentPage(0)}>{"<<"}</button>
        <button onClick={prevHandler}>{"<"}</button>
        <h2 className={s.current}>{currentPage + 1}</h2>
        <button onClick={nextHandler}>{">"}</button>
        <button onClick={() => setCurrentPage(totalPage - 1)}>{">>"}</button>
      </div>
    );
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <select className={s.select} onChange={handleFilterByCont}>
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Antarctica">Antarctic</option>
          <option value="Africa">Africa</option>
        </select>
        <select className={s.select} onChange={handleFilterByPopu}>
          <option value="NONE">NONE</option>
          <option value="MAYOR">MAYOR</option>
          <option value="MENOR">MENOR</option>
        </select>
        <select className={s.select} onChange={handleSortByName}>
          <option value="none">NONE</option>
          <option value="asc">SORT A-Z</option>
          <option value="desc">SORT Z-A</option>
        </select>
        <select className={s.select} onChange={handleFilterByActivities}>
          <option value="default">DEFAULT</option>
          {allActivities.map((activity) => {
            return (
              <option
                value={activity.id}
                key={activity.id}
                name={activity.name}
              >
                {activity.name}
              </option>
            );
          })}
        </select>
        <SearchBar setCurrentPage={setCurrentPage} />
        {botones()}
      </div>
      {countryPerPages.length ? (
        <div className={s.cards}>
          {countryPerPages.map((nation) => (
            <Card
              key={nation.id}
              id={nation.id}
              name={nation.name}
              flag={nation.flag}
              continente={nation.continente}
            />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Cards;
