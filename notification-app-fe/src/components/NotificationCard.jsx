import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export default function NotificationCard({ item }) {
  const getIcon = () => {
    switch (item.Type) {
      case "Placement":
        return <WorkIcon />;
      case "Result":
        return <AssignmentTurnedInIcon />;
      case "Event":
        return <EventIcon />;
      default:
        return null;
    }
  };

  const getColor = () => {
    switch (item.Type) {
      case "Placement":
        return "success";
      case "Result":
        return "primary";
      case "Event":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        mb: 2,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Chip
            icon={getIcon()}
            label={item.Type}
            color={getColor()}
          />

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {item.Timestamp}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {item.Message}
        </Typography>
      </CardContent>
    </Card>
  );
}