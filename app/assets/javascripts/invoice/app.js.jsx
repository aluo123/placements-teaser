const { useEffect, useState } = React;

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/invoice/index.json")
      .then((res) => res.json())
      .then((json_data) => {
        console.log(json_data);
        setData(json_data);
        setIsLoading(false);
      });
    updateAdjustments();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h3 className="text-muted">
          <i className="fa fa-cog fa-spin" />
          Loading React.js Component&hellip;
        </h3>
      ) : (
        <TableContainer data={data} columns={COLUMN_CONFIGS} />
      )}
    </div>
  );
}
