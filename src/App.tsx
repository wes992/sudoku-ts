import { ThemeProvider, CssBaseline, Grid } from "@mui/material";

import { useTheme } from "./utils/Theme";
import { SudokuContext } from "./Context";
import { Board } from "./Sudoku/Board";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <SudokuContext>
        <CssBaseline />

        <Board />
      </SudokuContext>
    </ThemeProvider>
  );
};

export { App };
