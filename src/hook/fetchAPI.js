/*
  - endpoints must start with "/"
  This fetch works only when used in react, and runned in dev. It does not work in node.
*/
import { useState, useEffect } from "react";

export function fetchAPI(endpoint, url = `https://api.realworld.io/api`) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const isLoading = data === null && error === null;
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  console.log(`${url}${endpoint}`);
  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(`${url}${endpoint}`, option);
        if (!response.ok) {
          setError("Server responded with:", response.status);
          return;
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("An error occured, please refresh the page");
        console.error(error);
      }
    }
    fetching();
  }, []);
  return [isLoading, data, error];
}
