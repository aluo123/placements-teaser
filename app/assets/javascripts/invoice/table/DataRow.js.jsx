function DataRow({ item, columns, onSave }) {
  return (
    <tr key={item.id}>
      {columns.map((col) => {
        return <td key={col.key}>{col.render(item, col.key, onSave)}</td>;
      })}
    </tr>
  );
}
