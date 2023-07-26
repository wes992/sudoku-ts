import { createContext, useContext, useState } from "react";
import { newStartingBoard } from "../utils/sudoku";

const initialState = {
  board: [] as number[],
};

const SudokuCtx = createContext({} as any);

export interface Cell {
  cellId: string;
  val: number | null;
  editable: boolean;
}

const SudokuContext = ({ children }: any) => {
  const [currentBoard, setCurrentBoard] = useState([] as Cell[]);
  const [currentSolvedBoard, setCurrentSolvedBoard] = useState([] as Cell[]);

  const getNewBoard = () => {
    const { startingBoard, solvedBoard } = newStartingBoard("insane");
    const destructuredBoard = startingBoard.reduce(
      (all: Cell[], row: number[], rowIndex: number): any => {
        const updatedRow = row.map((num, columIndex) => ({
          cellId: `${rowIndex}${columIndex}`,
          val: !num ? undefined : num,
          editable: !num,
        })) as Cell[];
        return [...all, ...updatedRow];
      },
      []
    );
    const destructuredSolvedBoard = solvedBoard.reduce(
      (all: Cell[], row: number[], rowIndex: number): any => {
        const updatedRow = row.map((num, columIndex) => ({
          cellId: `${rowIndex}${columIndex}`,
          val: !num ? undefined : num,
          editable: !num,
        })) as Cell[];
        return [...all, ...updatedRow];
      },
      []
    );
    setCurrentBoard(destructuredBoard);
    setCurrentSolvedBoard(destructuredSolvedBoard);
  };

  const solvePuzzle = () => setCurrentBoard(currentSolvedBoard);

  const value = {
    board: currentBoard,
    getNewBoard,
    solvePuzzle,
  };

  return (
    <SudokuCtx.Provider value={value}>
      <>{children}</>
    </SudokuCtx.Provider>
  );
};

const useSudokuContext = () => useContext(SudokuCtx);

export { SudokuContext, useSudokuContext };
