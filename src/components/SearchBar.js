import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar({ inputHandler }) {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 650,
      }}
      noValidate
      autoComplete="off"
      className="m-auto mb-4"
    >
      <TextField
        fullWidth
        label="Search by Cat Breed"
        id="Search"
        onChange={inputHandler}
      />
    </Box>
  );
}
