import {VALID_QUANTITY} from "../../constant/constants";
export const salesColumn = [
  {
    title: "Item Name",
    field: "itemName",
    editable: "never",
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
    editable: "never",
    lookup: {
      Temp: "Temperature exchange equipment",
      Screens: "Screens, monitors ",
      Lapms: "Lamps ",
      LargeEqip: "Large equipment ",
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
    title: "Available Quantity",
    field: "availableQuantity",
    editable: "never",
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
    title: "Unit price",
    field: "price",
    editable: "never",
    type: "currency",
    currencySetting: {currencyCode: "INR"},
    filtering: false,
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
    title: "Purchase Quantity",
    field: "quantities",
    type: "numeric",
    initialEditValue: 0,

    validate: (rowData) =>
      parseInt(rowData.quantities) > 0 ||
      rowData.quantities === null ||
      rowData.quantities === undefined
        ? ""
        : VALID_QUANTITY,
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
    title: "Total Price",
    field: "purchaseprice",
    type: "currency",
    currencySetting: {currencyCode: "INR"},
    initialEditValue: 0,
    editable: "never",

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
];
