import "./App.css";
//import { fetchAPI } from "./hook/fetchAPI";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage.jsx";
import { LayoutRoot } from "./Pages/LayoutRoot.jsx";
import { PageNotFound } from "./Pages/PageNotFound.jsx";

function App() {
  /* comment the section under out to see that fetchAPI only works in dev as explained in its document. */
  /*
  const [testisLoading, testdata, testerror] = fetchAPI(`/articles`);

  console.log(testisLoading, testdata, testerror);
*/
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutRoot />}>
                    <Route index element={<LandingPage />}/>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
