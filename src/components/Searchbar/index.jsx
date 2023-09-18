import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

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

export default Searchbar;
