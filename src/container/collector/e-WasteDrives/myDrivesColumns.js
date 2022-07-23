export const myDrivesColumns = [
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
    title: "Drive Name",
    field: "driveName",
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
    title: "Description",
    field: "description",
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
    title: "Items Accepted",
    field: "eWasteCategoryAccepted[0].categoryAccepted",
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
    title: "Address",
    field: "location",
    editable: "never",
    cellStyle: {
      fontSize: "13px",
    },
    headerStyle: {
      fontSize: "13px",
    },
  },
  {
    title: "Date",
    field: "date",
    editable: "never",
    type: "date",
    cellStyle: {
      fontSize: "13px",
    },
    headerStyle: {
      fontSize: "13px",
    },
  },
  {
    title: "Time",
    field: "time",
    editable: "never",
    lookup: {
      "8:00-16:00": "8:00-16:00",
      "9:00-17:00": "9:00-17:00",
      "10:00-18:00": "10:00-18:00",
      "11:00-19:00": "11:00-19:00",
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

  {
    title: "Status",
    field: "status",
    lookup: {
      Upcoming: "Upcoming",
      Cancelled: "Cancelled",
      completed: "Completed",
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
