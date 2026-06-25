import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function NotificationSort({
  value,
  onChange,
}) {
  return (
    <FormControl
      size="small"
      sx={{
        minWidth: 180,
      }}
    >
      <InputLabel>Sort By</InputLabel>

      <Select
        value={value}
        label="Sort By"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="latest">
          Latest First
        </MenuItem>

        <MenuItem value="oldest">
          Oldest First
        </MenuItem>
      </Select>
    </FormControl>
  );
}