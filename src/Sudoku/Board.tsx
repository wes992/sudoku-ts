import { Button, Grid } from "@mui/material";
import { useSudokuContext } from "../Context";
import { Cell } from "./Cell";
import { Buttons } from "./Buttons";
import { Cell as ICell } from "../Context/SudokuContext";

const Board = ({}) => {
  const { board } = useSudokuContext();
  console.log("board", board);

  return (
    <Grid container justifyContent="center">
      <Grid container columns={9} maxWidth={"500px"} m={4}>
        {board.map((cell: ICell, index: any) => {
          return <Cell xs={1} key={cell.cellId} {...cell} />;
        })}
      </Grid>
      <Buttons />
    </Grid>
  );
};

export { Board };
