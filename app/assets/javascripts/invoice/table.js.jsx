function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">campaign_id</th>
          <th scope="col">campaign_name</th>
          <th scope="col">line_item_name</th>
          <th scope="col">booked_amount</th>
          <th scope="col">actual_amount</th>
          <th scope="col">adjustments</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
}
