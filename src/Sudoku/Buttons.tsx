import { Button, Grid } from "@mui/material";
import { useSudokuContext } from "../Context";

const Buttons = ({}) => {
  const { getNewBoard, solvePuzzle } = useSudokuContext();
  return (
    <Grid container columns={3} spacing={2} justifyContent="center">
      <Grid item textAlign={"center"} xs={1}>
        <Button title="New Game" variant="outlined" onClick={getNewBoard}>
          New Game
        </Button>
      </Grid>
      <Grid item textAlign={"center"} xs={1}>
        <Button title="Solve" variant="contained" onClick={solvePuzzle}>
          Solve Board
        </Button>
      </Grid>
    </Grid>
  );
};

export { Buttons };
