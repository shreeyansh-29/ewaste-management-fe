const date = (data) => {
  if (data === "Jan") {
    data = "01";
  } else if (data === "Feb") {
    data = "02";
  } else if (data === "Mar") {
    data = "03";
  } else if (data === "Apr") {
    data = "04";
  } else if (data === "May") {
    data = "05";
  } else if (data === "Jun") {
    data = "06";
  } else if (data === "Jul") {
    data = "07";
  } else if (data === "Aug") {
    data = "08";
  } else if (data === "Sep") {
    data = "09";
  } else if (data === "Oct") {
    data = "10";
  } else if (data === "Nov") {
    data = "11";
  } else if (data === "Dec") {
    data = "12";
  }
  return data;
};
export default date;
