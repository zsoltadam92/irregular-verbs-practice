import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { speakHandler } from "../../utils/helper";
import { TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";

const Row = (props) => {
  const { verb, sx } = props;
  const [open, setOpen] = useState(false);

  const verbFormCells = ["v1", "simplePast", "pastParticiple"].map(
    (verbFrom) => (
      <TableCell key={verbFrom}>
        <IconButton
          aria-label="volume up"
          size="small"
          onClick={() => speakHandler(verb[verbFrom])}
        >
          <VolumeUpIcon />
        </IconButton>
        {verb[verbFrom]}
      </TableCell>
    )
  );

  return (
    <React.Fragment>
      <TableRow sx={sx}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        {verbFormCells}
      </TableRow>
      <TableRow>
        <TableCell
          sx={{ paddingBottom: 0, paddingTop: 0, borderBottom: "none" }}
          colSpan={2}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 1,
                textAlign: "center",
                borderBottom: "1px solid #aaa",
              }}
            >
              <Typography variant="body1" gutterBottom component="div">
                Hungarian meaning:
              </Typography>
              <Typography variant="h6" gutterBottom>
                {verb.v1Hu}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
