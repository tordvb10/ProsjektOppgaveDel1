import { SearchField } from "../components/SearchField.jsx";
import styles from "./ArticlePage.module.css";

export function ArticlePage() {
  return (
    <main className={styles.main}>
      <h1>This is about all articles</h1>
      <SearchField />
    </main>
  );
}
