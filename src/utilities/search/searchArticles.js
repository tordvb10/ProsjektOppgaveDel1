import { articles } from "../jsonfiles/GET-articles-ALLKEYS.json"

export function searchArticles(query) {
  const lowercasedQuery = query.toLowerCase();
  return articles.filter((item) => {
    const matchesSlug = item.slug.toLowerCase().includes(lowercasedQuery);
    const matchesTitle = item.title.toLowerCase().includes(lowercasedQuery);
    const matchesAuthor = item.author.username.toLowerCase().includes(lowercasedQuery);
    const matchesTagList = item.tagList.some((tag) =>
      tag.toLowerCase().includes(lowercasedQuery)
    );
    return matchesSlug || matchesTitle || matchesAuthor || matchesTagList;
  });
}
