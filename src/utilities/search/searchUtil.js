import items from "../jsonfiles/single-step-function.json";

export function searchArticles(query) {
  const lowercasedQuery = query.toLowerCase();
  return items.filter((item) => {
    const matchesSlug = item.slug.toLowerCase().includes(lowercasedQuery);

    const matchesTitle = item.title?.toLowerCase().includes(lowercasedQuery);
    const matchesAuthor = item.author?.toLowerCase().includes(lowercasedQuery);
    const matchesTagList = item.tagList?.some((tag) =>
      tag.toLowerCase().includes(lowercasedQuery)
    );
    console.log(matchesSlug);
    console.log(matchesTitle);
    console.log(matchesAuthor);
    console.log(matchesTagList);

    return matchesSlug || matchesTitle || matchesAuthor || matchesTagList;
  });
}
