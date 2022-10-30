import { Box, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MaximizeIcon from "@mui/icons-material/StopOutlined";
import MinimizeIcon from "@mui/icons-material/Remove";
import { closeWindow, minimizeWindow, toggleMaximizeWindow } from "#preload";

export function Header() {
  function handleClose() {
    closeWindow();
  }

  function handleMaximize() {
    toggleMaximizeWindow();
  }

  function handleMinimize() {
    minimizeWindow();
  }

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
        <IconButton
          onClick={handleMinimize}
          color="secondary"
          sx={{
            borderRadius: 0,
            px: 1.6,
            ":hover": {
              backgroundColor: "grey.500",
              color: "text.secondary",
            },
          }}
        >
          <MinimizeIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={handleMaximize}
          color="secondary"
          sx={{
            fontSize: 12,
            borderRadius: 0,
            px: 1.6,
            ":hover": {
              backgroundColor: "grey.500",
              color: "text.secondary",
            },
          }}
        >
          <MaximizeIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={handleClose}
          color="secondary"
          sx={{
            borderRadius: 0,
            px: 1.6,
            ":hover": {
              backgroundColor: "error.main",
              color: "error.contrastText",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
