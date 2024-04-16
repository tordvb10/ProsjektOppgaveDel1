import { data as OBJ } from "../utilities/jsonfiles/searchSortArrays.json";
import { articles } from "../utilities/jsonfiles/GET-articles-ALLKEYS.json";
import style from "./SearchBox.module.css";
import { newSearch } from "../utilities/search/newSearch.js";
export function SearchBox(props) {
  console.log(props.useStateInfo);
  const [currentSlugs, setCurrentSlugs] = [
    props.useStateInfo.currentSlugs.data,
    (value) => {
      props.useStateInfo.currentSlugs.funk(value);
    },
  ];
  const [currentTags, setCurrentTags] = [
    props.useStateInfo.tags.data,
    (value) => {
      props.useStateInfo.tags.funk(value);
    },
  ];
  function selectActiveArticles(ByTags) {
    console.log(ByTags);
    console.log(ByTags.length);
    if (ByTags.length === 0) {
      setCurrentSlugs(
        articles.map((article) => {
          return article.slug;
        })
      );
    } else {
      let new_slugs = [];
      ByTags.map((tag) => {
        OBJ.tagList[tag].map((slug) => {
          if (!new_slugs.includes(slug)) {
            new_slugs.push(slug);
          }
        });
      });
      console.log(new_slugs);
      setCurrentSlugs(new_slugs);
      console.log(
        articles.map((article) => {
          return article.slug;
        })
      );
      console.log(currentSlugs);
    }
    console.log(currentSlugs);
  }
  function clickTag(tag) {
    console.log(currentTags);
    if (currentTags.includes(tag)) {
      currentTags.splice(currentTags.indexOf(tag), 1);
      document
        .querySelector(`#buttontagID${tag}`)
        .classList.remove(style.buttentagIsActive);
    } else {
      currentTags.push(tag);
      document
        .querySelector(`#buttontagID${tag}`)
        .classList.add(style.buttentagIsActive);
    }
    console.log(currentTags);
    setCurrentTags(currentTags);
    console.log(currentTags);
    //let current_tags = OBJ.tagList[tag]
    selectActiveArticles(currentTags);
    console.log(currentSlugs);
    newSearch(props);
  }
  return (
    <>
      <h3>Popular tags</h3>
      <div className={style.ButtonWrap}>
        {Object.keys(OBJ.tagList).map((tag) => {
          if (OBJ.tagList[tag].length > 1) {
            return (
              <button
                id={`buttontagID${tag}`}
                className={style.buttontag}
                onClick={() => clickTag(tag)}
                key={tag}
              >
                {tag}
              </button>
            );
          }
        })}
      </div>
    </>
  );
}
