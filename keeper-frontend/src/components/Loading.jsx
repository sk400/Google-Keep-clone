import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box>
      <CircularProgress sx={{ color: "#E4DCCF" }} />
    </Box>
  );
};

export default Loading;
