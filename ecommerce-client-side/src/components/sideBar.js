import { Box, Checkbox, Slider } from "@material-ui/core";
import React from "react";
import "./styles/sideBar.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SideBar() {
  const [valuePrice, setValue] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="side-bar-container">
      <h6 style={{ fontWeight: "bold", width: "100%", textAlign: "center" }}>
        Filter By
      </h6>
      <div className="filter-by-price">
        <h6 style={{ fontWeight: "bold" }}>Price Range :</h6>
      </div>
      <Box
        style={{ width: "80%", marginLeft: "10%" }}
        sx={{
          color: "primary.main",
        }}
      >
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={valuePrice}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
        />
      </Box>
      <div className="filter-by-price">
        <h6 style={{ fontWeight: "bold" }}>Price Filter :</h6>

        <span>
          <Checkbox {...label} defaultChecked color="default" />
          ASC Price
        </span>
        <br />
        <span>
          <Checkbox {...label} defaultChecked color="default" />
          DESC Price
        </span>
      </div>
      <div className="filter-by-price">
        <h6 style={{ fontWeight: "bold" }}>Alphab Filter :</h6>

        <span>
          <Checkbox {...label} defaultChecked color="default" />
          ASC Alpha
        </span>
        <br />
        <span>
          <Checkbox {...label} defaultChecked color="default" />
          DESC Alpha
        </span>
      </div>
    </div>
  );
}

export default SideBar;
