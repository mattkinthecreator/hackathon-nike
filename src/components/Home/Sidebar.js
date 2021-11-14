import React from 'react';
import RangeSlider from './Slider'
import {
    FormControl,
    Grid,
    Paper
  } from "@mui/material";


const Sidebar = () => {
  return (
   <Grid item md={3}>
     <Paper>
     <FormControl component="fieldset">
        <RangeSlider />
    </FormControl>
     </Paper>
   </Grid>
  );
};

export default Sidebar;