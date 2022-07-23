export const ItemsForSaleColumns = [
  {
    title: "Item Name",
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
    title: "Price/Item",
    field: "price",
    type: "currency",
    currencySetting: {currencyCode: "INR"},
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
