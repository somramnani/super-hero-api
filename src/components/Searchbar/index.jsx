import TextField from "@mui/material/TextField";
import { Search, Clear } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Searchbar = ({ handleClick, handleChange, input, handleClear }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        px: 2,
        py: 2,
        mb: 3,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: 3,
        maxWidth: 600,
        width: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Enter super hero"
        variant="outlined"
        value={input}
        onChange={(e) => handleChange(e)}
        size="small"
        sx={{ flexGrow: 1, backgroundColor: "white" }}
      />

      <Button
        variant="contained"
        onClick={(e) => handleClick(e)}
        size="small"
        sx={{ height: "40px" }}
      >
        <Search />
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={(e) => handleClear()}
        size="small"
        sx={{ height: "40px" }}
      >
        <Clear />
      </Button>
    </Box>
  );
};

export default Searchbar;
