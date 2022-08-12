export const requestSummaryColumns = [
  {
    title: "ID",

    field: "id",

    editable: "never",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Request Name",
    editable: "never",
    field: "itemName",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Category",
    editable: "never",
    field: "category",
    lookup: {
      Temp: "Temperature exchange equipment ",
      Screens: "Screens, monitors",
      Lapms: "Lamps",
      LargeEqip: "Large equipment ",
      SmallEquip: "Small equipment ",
      SmallIT: "Small IT and telecommunication equipment ",
    },
    initialEditValue: "initial edit value",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Quantity",
    editable: "never",
    field: "quantity",
    type: "numeric",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Date",
    editable: "never",
    field: "scheduledDate",
    type: "date",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Time",
    field: "scheduledTime",
    editable: "never",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Request Type",
    editable: "never",
    field: "requestType",

    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Status",
    field: "status",
    lookup: {
      Scheduled: "Scheduled",
      Completed: "Completed",
    },
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
];
