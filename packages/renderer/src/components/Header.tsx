import { Box, Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MaximizeIcon from "@mui/icons-material/CropSquare";
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
        <Button
          onClick={handleMinimize}
          color="secondary"
          sx={{
            p: 0,
            m: 0,
          }}
        >
          <MinimizeIcon fontSize="small" />
        </Button>
        <Button size="small" onClick={handleMaximize} color="secondary">
          <MaximizeIcon fontSize="small" />
        </Button>
        <Button size="small" onClick={handleClose} color="secondary">
          <CloseIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}
