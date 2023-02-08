function currencyCellRenderer(item, key) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return <div>{formatter.format(item[key])}</div>;
}
