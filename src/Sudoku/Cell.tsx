import { Grid, TextField, Typography, useTheme } from "@mui/material";

const Cell = ({ children, ...props }: any) => {
  const { cellId, editable, val } = props;
  const theme = useTheme();

  const defaultBorder = `1px solid ${theme.palette.grey["800"]}`;

  const boldBorder = `1px solid ${theme.palette.grey["300"]}`;

  const borderLeft = Number(cellId) % 10 === 0;
  const controlArray = ["2", "5", "8"];

  const br = controlArray.includes(cellId.split("")[1]);
  const bb = controlArray.includes(cellId.split("")[0]);
  const bt = cellId.split("")[0] === "0";
  return (
    <Grid
      item
      justifyContent={"center"}
      alignContent={"center"}
      xs={1}
      sx={{
        p: 0.5,
        width: "44px",
        height: "44px",
        borderRight: br ? boldBorder : defaultBorder,
        borderBottom: bb ? boldBorder : defaultBorder,
        borderTop: bt ? boldBorder : defaultBorder,
        borderLeft: borderLeft ? boldBorder : defaultBorder,
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        borderRadius={1}
        sx={{
          // background: editable
          //   ? theme.palette.background.paper
          //   : theme.palette.grey["800"],
          color: editable
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
          borderRadius: "5px",
          // pt: 0.5,
        }}
      >
        <TextField
          size="small"
          variant={editable ? "standard" : "filled"}
          disabled={!editable}
          value={val}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          sx={{
            "& :before": { borderBottom: 0 },
            "> div": { borderRadius: "5px", fontSize: "1.5rem" },
            "> input": { textAlign: "center" },
            p: 0,
            width: "40px",
            height: "40px",
            textAlign: "center",
          }}
          onChange={(e) => console.log(e.target.value)}
        />
        {/* <Typography variant="h5">{val}</Typography> */}
        {children}
      </Grid>
    </Grid>
  );
};

export { Cell };
