export const convertNumber = (number) => {
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
  if (arr.length == 5) {
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (arr.length == 4) {
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (arr.length == 3) {
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (arr.length == 2) {
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else return number.toLocaleString();
};
