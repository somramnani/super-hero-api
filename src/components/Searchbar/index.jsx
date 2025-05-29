import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Searchbar = ({ handleClick, handleChange, input }) => {
  return (
    <Box display="flex" alignItems="center" gap={1} sx={{ px: 2, mb: 2 }}>
      <TextField
        id="outlined-basic"
        label="Enter super hero"
        variant="outlined"
        value={input}
        onChange={(e) => handleChange(e)}
        size="small"
        sx={{ flexGrow: 1 }}
      />

      <Button
        variant="contained"
        onClick={(e) => handleClick(e)}
        size="small"
        sx={{ height: "40px" }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default Searchbar;
