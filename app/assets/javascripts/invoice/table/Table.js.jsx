function Table({ data, columns, onSave }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((col) => {
            return <th key={col.key}>{col.header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <DataRow
              key={item.id}
              item={item}
              columns={columns}
              onSave={onSave}
            />
          );
        })}
      </tbody>
    </table>
  );
}
