import { Box } from "@mui/material";
import { HeroLogo } from "../components/HeroLogo";

export function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <HeroLogo width="300" />
    </Box>
  );
}
