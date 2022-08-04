import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

var maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 6);
export const pickUpColumn = [
  {
    title: "Item Name",
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
    title: "Category",
    field: "category",
    lookup: {
      Temp: "Temperature exchange equipment (such as air conditioners, freezers)",
      Screens: "Screens, monitors (TVs, laptops)",
      Lapms: "Lamps (LED lamps, for example)",
      LargeEqip: "Large equipment (washing machines, electric stoves)",
      SmallEquip: "Small equipment (microwaves, electric shavers)",
      SmallIT:
        "Small IT and telecommunication equipment (such as mobile phones, printers)",
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
  {
    title: "Quantity",
    type: "numeric",
    field: "quantity",

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
          id="date-picker-dialog"
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
      "10:00 -12:00": "10:00 -12:00",
      "12:00 -14:00": "12:00 -14:00",
      "14:00 -16:00": "14:00 -16:00",
      "16:00 -18:00": "16:00 -18:00",
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
