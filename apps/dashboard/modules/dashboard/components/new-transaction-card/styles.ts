import { SxProps, Theme } from "@mui/material";
import theme from "@repo/ui/theme";

const styles: Record<string, SxProps<Theme>> = {
  pixelsTop: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
  },
  pixelsBottom: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    bottom: -7,
  },
  card: {
    height: "420px",
    position: "relative",
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      height: "570px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
};

export default styles;
