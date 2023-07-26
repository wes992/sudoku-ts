import { createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { getDesignTokens } from "./customPalette";

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? "dark" : "light")),
    [prefersDarkMode]
  );

  console.log("theme", theme);
  return theme;
};
