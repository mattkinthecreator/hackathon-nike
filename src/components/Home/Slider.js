import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { productsContext } from '../../Contexts/ProductsContext';
import history from "../../helpers/history";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
function valuetext(value) {
  return `${value} $`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 400]);

  const { getProducts } = React.useContext(productsContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const search = new URLSearchParams(history.location.search);
    search.set("price_gte", newValue[0]);
    search.set("price_lte", newValue[1]);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(search.toString());
  };

  
const muiTheme = getMuiTheme({
  slider: {
    trackColor: "yellow",
    selectionColor: "red"
  }
});

  return (
    <Box sx={{ width: 100}}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <Slider
          getAriaLabel={() => "price range"}
          value={value}
          max={400}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
    </MuiThemeProvider>
      </Box>
  );
}