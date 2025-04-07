import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./styles.css";
import { useState } from "react";
import { dividerClasses } from "@mui/material";

export default function TogglePriceType({ priceType , handlePriceTypeChange}) {
  

  return (
    <div className="toggle-prices">
    <ToggleButtonGroup

    sx = {{
      "& .Mui-selected" : {
        color:"var(--blue) !important",
      },
      borderColor: "var(--blue)",
      border : "unset !important",
      "& .MuiToggleButtonGroup-grouped" : {
        border: "1px solid !important",
        borderColor: "unset",
        color: "var(--blue)",
      },
      "& .MuiToggleButton-standard" : {
        color: "var(--blue)",
      },
    }}


      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
    >
      <ToggleButton className="toggle-btn" value="prices">Price</ToggleButton>
      <ToggleButton className="toggle-btn" value="total_volumes">Total Volume</ToggleButton>
      <ToggleButton className="toggle-btn" value="market_caps"> Market Cap</ToggleButton>
      
    </ToggleButtonGroup>
    </div>
  );
}
