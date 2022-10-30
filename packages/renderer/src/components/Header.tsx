import CloseIcon from "@mui/icons-material/Close";
import Maximize from "@mui/icons-material/CropSquare";
import MinimizeIcon from "@mui/icons-material/Remove";

import { Box, IconButton } from "@mui/material";

export function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        width: "100%",
        backgroundColor: "background.paper",
        color: "primary.contrastText",
        px: 1,
      }}
    >
      <Box
        display="flex"
        width="100%"
        height="100%"
        sx={{
          WebkitAppRegion: "drag",
        }}
      />
      <Box sx={{ display: "flex" }}>
        <IconButton size="small">
          <MinimizeIcon />
        </IconButton>
        <IconButton size="small">
          <Maximize />
        </IconButton>
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
