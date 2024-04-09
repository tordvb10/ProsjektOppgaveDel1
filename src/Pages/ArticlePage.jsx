import { ArticleLists } from "../components/ArticleLists.jsx"
import { SearchField } from "../components/SearchField.jsx"
export function ArticlePage() {
    return (
        <main>
            <h1>This is about all articles</h1>
            <SearchField />
            <ArticleLists />
        </main>
    )
}