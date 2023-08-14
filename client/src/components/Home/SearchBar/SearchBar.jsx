/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
// import { Component } from "react";
// import { connect } from "react-redux";
// import { getCountriesByName } from "../../../redux/action";
// import s from "./SearchBar.module.css";

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: "",
//     };
//   }

//   cleanButton = () => {
//     this.setState({ searchQuery: "" });
//     this.props.getCountriesByName("");
//   };
//   handleSearch = (searchQuery) => {
//     this.props.getCountriesByName(searchQuery);
//   };

//   render() {
//     const { searchQuery } = this.state;

//     return (
//       <div className={s.form}>
//         <button className={s.buttons}>
//           <svg
//             width="17"
//             height="16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             role="img"
//             aria-labelledby="search"
//           >
//             <path
//               d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
//               stroke="currentColor"
//               stroke-width="1.333"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             ></path>
//           </svg>
//         </button>
//         <input
//           className={s.input}
//           type="text"
//           placeholder="Search name..."
//           value={searchQuery}
//           onChange={(e) => {
//             const newSearchQuery = e.target.value;
//             this.setState({ searchQuery: newSearchQuery });
//             this.handleSearch(newSearchQuery);
//           }}
//         />
//         <button class={s.reset} onClick={this.cleanButton}>
//           X
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   countries: state.countries, // Asegúrate de que esto coincida con el estado en tu reducer
// });

// const conectador = connect(mapStateToProps, { getCountriesByName })(SearchBar);

// export default conectador;

import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getCountriesByName } from "../../../redux/action";
import s from "./SearchBar.module.css";

const SearchBar = ({ setCurrentPage}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch()
  const cleanButton = () => {
    setSearchQuery("");
    dispatch(getCountriesByName(""));
    setCurrentPage(0)
  };

  const handleSearch = (newSearchQuery) => {
    // const query = newSearchQuery.target.value
    setSearchQuery(newSearchQuery);
    dispatch(getCountriesByName(newSearchQuery));
    setCurrentPage(0)
  };

  return (
    <div className={s.form}>
      <button className={s.buttons}>
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className={s.input}
        type="text"
        placeholder="Search name..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className={s.reset} onClick={cleanButton}>
        X
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries, // Asegúrate de que esto coincida con el estado en tu reducer
});

const conectador = connect(mapStateToProps, { getCountriesByName })(SearchBar);

export default conectador;

