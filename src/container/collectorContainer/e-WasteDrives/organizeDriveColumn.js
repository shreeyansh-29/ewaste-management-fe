import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

var maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 6);

export const organizeDriveColumn = [
  {
    title: "Drive Name",
    field: "name",
    cellStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
  },
  {
    title: "Description",
    field: "description",
    cellStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
  },
  {
    title: "Categories Accepted",
    field: "itemsAcc",
    cellStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
  },
  {
    title: "Date",
    field: "date",
    type: "date",
    editComponent: ({value, onChange}) => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          format="dd/MM/yyyy"
          clearable
          value={value}
          onChange={onChange}
          minDate={new Date().toDateString()}
          maxDate={maxDate}
        />
      </MuiPickersUtilsProvider>
    ),
    cellStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
  },
  {
    title: "Time",
    field: "time",
    lookup: {
      "8:00-16:00": "8:00-16:00",
      "9:00-17:00": "9:00-17:00",
      "10:00-18:00": "10:00-18:00",
      "11:00-19:00": "11:00-19:00",
    },
    cellStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "15px",
    },
  },
];
