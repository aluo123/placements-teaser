function Table({ data, columns }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => {
            return <th key={col.key}>{col.header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {columns.map((col) => {
          return data.map((item) => {
            return <Item key={item.id} item={item} />;
          });
        })}
      </tbody>
    </table>
  );
}
