function Item({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.campaign_id}</td>
      <td>{item.campaign_name}</td>
      <td>{item.line_item_name}</td>
      <td>{item.booked_amount}</td>
      <td>{item.actual_amount}</td>
      <td>{item.adjustments}</td>
    </tr>
  );
}
