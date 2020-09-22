import React, { useEffect, useState } from "react";
import "./App.css";
import { APICall } from "./utils/util";
import List from "./components/List";

function App() {
  const [custData, setCustData] = useState([]);

  useEffect(() => {
    (async () => {
      let datafromAPI = await APICall();
      setCustData(datafromAPI.sort((a,b) => (a.business_name > b.business_name) ? 1 : ((b.business_name > a.business_name) ? -1 : 0)));
    })();
  }, []);

  return custData.length ? (
    <div>
      <List custData={custData}></List>
    </div>
  ) : (
    <h3>Loading......</h3>
  );
}

export default App;
