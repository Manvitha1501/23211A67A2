import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <TextField
      fullWidth
      placeholder="Search Notifications..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        mt: 2,
        mb: 3,
        background: "white",
        borderRadius: 2,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
}