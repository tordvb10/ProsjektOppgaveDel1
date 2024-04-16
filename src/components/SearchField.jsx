import style from "./SearchField.module.css";
import { newSearch } from "../utilities/search/newSearch.js";
export function SearchField(props) {
  const query = props.useStateInfo.query.data
  function doAnewSearch()   {
    newSearch(props)
  }
  return (
    <div className={style.SearchField}>
      <input
        id="searchID"
        type="text"
        value={query}
        onChange={doAnewSearch}
        placeholder="Search by slug, title, author, or tags"
      />
      
    </div>
  );
}
