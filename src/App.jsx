import { useState } from "react";
import data from "../data.js";
import List from "./Components/List.jsx";
const App = () => {
  const [peopleData, setPeopleData] = useState(data);
  const handleClear = () => {
    setPeopleData([])
  }
  return (
    <>
      <section className="container">
        <h3>{peopleData.length} birthdays today</h3>
        <List peopleData={peopleData} setPeopleData={setPeopleData} />
        <button className="btn btn-block" onClick={handleClear}>clear all</button>
      </section>
    </>
  );
};
export default App;
