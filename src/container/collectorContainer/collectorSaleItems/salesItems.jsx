/*
  @module salesItems
*/
import React, {useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SummarySales from "./availableSales";
import SoldItems from "./soldItems";
import "./collectorSales.css";

const SalesItems = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  const TabPanel = ({children, index, ...other}) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  return (
    <div className="sales">
      <h2 className="sales-h2">Sales Summary</h2>
      <Paper square className="sales-paper">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
          variant="fullWidth"
          elevation={20}
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
    </div>
  );
};
export default SalesItems;
