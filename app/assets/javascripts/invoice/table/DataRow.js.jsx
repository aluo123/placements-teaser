function DataRow({ item, columns }) {
  return (
    <tr key={item.id}>
      {columns.map((col) => {
        return <td key={col.key}>{col.render(item[col.key])}</td>;
      })}
    </tr>
  );
}
