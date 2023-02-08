function updateAdjustments(item) {
  console.log("update", item);
  fetch(`/invoice/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
    },
    body: JSON.stringify({
      invoice: { adjustments: item.adjustments },
    }),
  }).then((res) => console.log(res));
}
