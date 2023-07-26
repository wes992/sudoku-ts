import { newStartingBoard } from "./utils/sudoku";

import express from "express";
import bodyParser from "body-parser";
import path from "path";

// TODO: Refactor for TS and install imports
const app = express();

const port = process.env.PORT || 4000;
// Required for CRA deployment
app.use(express.static(path.join(__dirname, "build")));

/**
 * bodyParser middleware automatically parses the request body of POSTs and places
 * the result in request.body of each route. (Assumes Content-Type: application/json is sent.)
 */
app.use(bodyParser.json());

// app.get("/g/:sudokuGame", (request: any, response: any) => {
//   console.log(request.params.sudokuGame);
//   console.log({ response });
//   response.redirect("/bar");
// });

// app.get("/sudoku", (request: any, response: any) => {
//   const { difficulty } = request.query;
//   if (!Object.values(difficultyLevels).includes(difficulty)) {
//     throw new Error(
//       `Invalid difficulty level provided. Received '${difficulty}'`
//     );
//   }

//   const sudokuPuzzle = generate(difficulty);
//   const normalizedSudoku = normalizeSudoku(sudokuPuzzle);
//   response.json(normalizedSudoku);
// });

// app.post("/sudoku", (request: any, response: any) => {
//   // TODO: error handling for malformed requests
//   const unsolvedSudoku = denormalizeSudoku(request.body.unsolvedSudoku);
//   const solvedSudoku = solve(unsolvedSudoku);
//   response.json(normalizeSudoku(solvedSudoku));
// });

app.get("/new", (request: any, response: any) => {
  const level = request.query.level || "medium";

  const sudokuPuzzle = newStartingBoard(level);

  response.json(sudokuPuzzle);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// PaaS places (e.g. Heroku, AWS) will use process.env.PORT when deploying, which is why it's here.
app.listen(port, () => console.log("server listening on port", port));

export {};
