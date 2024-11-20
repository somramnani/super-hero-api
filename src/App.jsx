import "./App.css";
import axios from "axios";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Cards from "./components/Cards";

/*
TODO: 
if there are no results
  - we want to check if there are no results from the API then we return no results found
*/
export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [isData, setIsData] = useState(false);

  const getData = (value) => {
    axios({
      method: "get",
      url: `https://api-proxy-server-steel.vercel.app/super-hero-api/${encodeURIComponent(
        value
      )}`,
    }).then(function (response) {
      if (response) setData(response.data.results);
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    getData(input);
    if (data) setIsData(true);
  };

  console.log(data);

  return (
    <div>
      <Searchbar
        handleChange={handleChange}
        handleClick={handleClick}
        input={input}
      />
      {isData ? <Cards data={data} /> : <h2>No results found</h2>}
    </div>
  );
}
