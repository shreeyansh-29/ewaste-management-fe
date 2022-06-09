import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import React, { useState } from "react";

export default function rating() {
  const [value, setValue] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="rating"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
