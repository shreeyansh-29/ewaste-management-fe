export const soldItemsColumns = [
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
    title: " Sold Quantity",
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
    title: "Total Price",
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
];
