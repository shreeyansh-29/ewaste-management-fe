export const collectorRequestsColumns = [
  {
    title: "Request Name",
    editable: "never",
    field: "itemName",
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
    editable: "never",
    field: "category",
    lookup: {
      Temp: "Temperature exchange equipment",
      Screens: "Screens, monitors ",
      Lapms: "Lamps ",
      LargeEqip: "Large equipment",
      SmallEquip: "Small equipment",
      SmallIT: "Small IT and telecommunication equipment ",
    },
    initialEditValue: "initial edit value",
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
    editable: "never",
    field: "quantity",
    type: "numeric",
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
    editable: "never",
    field: "scheduleDate",
    type: "date",
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
    editable: "never",
    field: "scheduledTime",
    type: "date",
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
    title: "Address",
    field: "address",
    editable: "never",
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
