/*
  @module myRequests
*/
import React, {useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Pending from "./pending";
import Completed from "./completed";
import "../../customer.css";

const MyRequests = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  const TabPanel = (props) => {
    const {children, index, ...other} = props;
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
    <div className="myRequests">
      <h2 className="myRequests-h2"> My Requests </h2>
      <Paper square className="myRequests-Paper">
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
          <Tab label="Pending" />

          <Tab label="Completed" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Pending />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Completed />
        </TabPanel>
      </Paper>
    </div>
  );
};
export default MyRequests;
