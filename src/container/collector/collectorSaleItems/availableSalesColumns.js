export const availableSalesColumns = [
  {
    title: "ID",
    field: "id",
    editable: "never",
    cellStyle: {
      textAlign: "center",
      fontSize: "13px",
    },
    headerStyle: {
      textAlign: "right",
      fontSize: "13px",
    },
  },
  {
    title: "Item Name",
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
      Screens: "Screens, monitors ",
      Lapms: "Lamps ",
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
    title: "Available Quantity",
    field: "availableQuantity",
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
    title: "Unit Price",
    editable: "never",
    field: "price",
    type: "currency",
    currencySetting: {currencyCode: "INR"},
    cellStyle: {
      fontSize: "13px",
      textAlign: "center",
    },
    headerStyle: {
      fontSize: "13px",
      textAlign: "center",
    },
  },
  {
    title: "Total Price",
    editable: "never",
    field: "Totalprice",
    type: "currency",
    currencySetting: {currencyCode: "INR"},
    cellStyle: {
      fontSize: "13px",
      textAlign: "center",
    },
    headerStyle: {
      fontSize: "13px",
      textAlign: "center",
    },
  },
];
