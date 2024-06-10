import { useId } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { FaSearch, FaTimes } from "react-icons/fa";

import css from "./SearchBox.module.css";
import "./SearchWithClear.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  const clearSearch = () => {
    dispatch(changeFilter(""));
  };

  const serarchTextid = `searchTextId:${useId()}`;
  return (
    <>
      <form className={css.form} id="searchBox">
        <label className={css.label}>Search Contacts (by name)</label>
        <div className={css["input-container"]}>
          <FaSearch className={css["icon"]} />
          <input
            type="text"
            value={filter}
            id={serarchTextid}
            onChange={handleFilterChange}
            placeholder="Enter name ..."
          />
          <FaSearch className="icon search-icon" />
          {filter && (
            <FaTimes className="icon clear-icon" onClick={clearSearch} />
          )}
        </div>
      </form>
    </>
  );
};

export default SearchBox;
