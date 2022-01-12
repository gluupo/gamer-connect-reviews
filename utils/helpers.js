module.exports = {
  format_time: (date) => {
    return date.toLocaleString();
  },
  format_date: (timestamp) => {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  },
};