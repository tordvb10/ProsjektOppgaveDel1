import { ArticleBox } from "./ArticleBox.jsx";
export function ArticleMaps(props) {
  const results = props.results;
  return (
    <>
      {results === null ? (
        <p>No results found.</p>
      ) : (
        results.map((article) => {
          return (
            <li key={article.slug}>
              <ArticleBox ArticleElement={article} />
            </li>
          );
        })
      )}
    </>
  );
}
