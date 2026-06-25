import {
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const filters = [
  "All",
  "Placement",
  "Result",
  "Event",
];

export default function NotificationFilter({
  value,
  onChange,
}) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(event, newValue) => {
        if (newValue !== null) {
          onChange(newValue);
        }
      }}
      color="primary"
      sx={{
        mb: 3,
      }}
    >
      {filters.map((type) => (
        <ToggleButton
          key={type}
          value={type}
          sx={{
            px: 3,
            fontWeight: "bold",
          }}
        >
          {type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}