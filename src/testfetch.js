//endpoints must start with "/"
export default function fetchAPI(
  endpoint,
  url = `https://api.realworld.io/api`
) {
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetching = async () => {
    const response = await fetch(`${url}${endpoint}`, option);
    const data = await response.json();
    console.log(data);
  };

  fetching();
}
