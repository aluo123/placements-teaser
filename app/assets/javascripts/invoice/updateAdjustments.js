function updateAdjustments() {
  fetch("/invoice/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
    },
    body: JSON.stringify({
      invoice: { adjustments: 1000 },
    }),
  }).then((res) => console.log(res));
}
