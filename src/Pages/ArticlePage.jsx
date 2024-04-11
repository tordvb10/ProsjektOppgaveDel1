import { SearchField } from "../components/SearchField.jsx";
import { SearchBox } from "../components/SearchBox.jsx";
import styles from "./ArticlePage.module.css";

export function ArticlePage() {
  return (
    <main className={styles.main}>
      <h1>This is about all articles</h1>
      <SearchField />
      <SearchBox />
    </main>
  );
}
