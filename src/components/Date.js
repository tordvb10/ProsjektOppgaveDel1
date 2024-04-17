function formatDate(date) {
  const d = new Date(date);
  const suffix = ["th", "st", "nd", "rd"],
    v = d.getDate();
  const dateSuffix =
    v % 100 >= 11 && v % 100 <= 13 ? "th" : suffix[Math.min(v % 10, 4)];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${v}${dateSuffix} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
}
