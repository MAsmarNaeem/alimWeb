import { Box, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <Box sx={{ backgroundColor: "#a5d6a7" }}>
      <Typography
        pt={1}
        pb={1}
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Rubik" }}
      >
        عامل قاسم علی شاہ
      </Typography>
    </Box>
  );
};

export default TopBar;
