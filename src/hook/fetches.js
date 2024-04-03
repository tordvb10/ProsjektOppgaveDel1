/*
  - endpoints must start with "/"
  This fetch does not work in react. Only for use in node to save id etc. as json files.
  Meaning it does not in the webbrowser, only used for multiple fetches in node, so that only one fetch is needed in the webbrowser.
  import fetchToJson from "src/hook/fetchToJson.js";
*/
export default function fetches(endpoint, url = `https://api.realworld.io/api`) {
    const option = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
    async function fetching() {
        try {
            const response = await fetch(`${url}${endpoint}`, option);
            if (!response.ok) {
                console.log("Server responded with:", response.status);
                return;
            }
            const data = await response.json();
            return data
        } catch (error) {
        console.log("An error occured, please refresh the page");
        }
    }
    return fetching();
}