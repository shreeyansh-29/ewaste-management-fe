import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SummarySales from "./availableSales";
import SoldItems from "./soldItems";

export default function SaleItems() {
  const [value, setValue] = useState(0);
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper square style={{margin:"80px auto", width:"100%"  }}>
      <Tabs 
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
        variant="fullWidth"
      >
        <Tab label="Available" />
        <Tab label="Sold" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SummarySales />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SoldItems /> 
      </TabPanel>
    </Paper>
  );
}
