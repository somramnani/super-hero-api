import "./App.css";
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Searchbar = ({ handleClick, handleChange, input }) => {
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Enter super hero"
          variant="outlined"
          value={input}
          onChange={(e) => handleChange(e)}
        />

        <Button variant="contained" onClick={(e) => handleClick(e)}>
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

const Cards = ({ data }) => {
  return (
    <>
      {data.map((hero) => (
        <div className="cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={hero.image.url}
              title="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hero.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};
// we want to check if there are no results from the API then we return no results found
export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [isData, setIsData] = useState(false);

  const getData = (value) => {
    axios({
      method: "get",
      // url: `https://superheroapi.com/api/${accessToken}/search/${name}`
      url: `https://cors.somramnani.repl.co/cors/${value}`,
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
