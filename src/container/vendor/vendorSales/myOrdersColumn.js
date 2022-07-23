export const myOrdersColumn = [
  {
    title: "   ID",
    field: "id",
    editable: false,
    filtering: false,
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
    title: "Item Name",
    field: "itemName",
    editable: false,
    filtering: false,
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
    field: "category",
    lookup: {
      Temp: "Temperature exchange equipment ",
      Screens: "Screens, monitors ",
      Lapms: "Lamps ",
      LargeEqip: "Large equipment",
      SmallEquip: "Small equipment ",
      SmallIT: "Small IT and telecommunication equipment ",
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
    title: "Quantity",
    field: "quantity",
    type: "numeric",
    filtering: false,
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
    title: "Price",
    field: "price",
    filtering: false,
    type: "currency",
    currencySetting: {currencyCode: "INR"},
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
    field: "address",
    editable: false,
    cellStyle: {
      fontSize: "13px",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Date of Purchase",
    field: "date",
    editable: false,
    cellStyle: {
      fontSize: "13px",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
  },
  {
    title: "Status",
    editable: false,
    field: "status",
    lookup: {
      Open: "Open",
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
