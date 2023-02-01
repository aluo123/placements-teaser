const { useEffect, useState } = React;

function NewComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/invoice/example.json")
      .then((res) => res.json())
      .then((json_data) => {
        console.log(
          "FYI: Here's the full placements_teaser_data.json contents: ",
          json_data
        );
        setData(json_data.toString());
        setIsLoading(false);
      });
  });

  return (
    <div>
      {isLoading ? (
        <h3 className="text-muted">
          <i className="fa fa-cog fa-spin" />
          Loading React.js Component&hellip;
        </h3>
      ) : (
        data
      )}
    </div>
  );
}

// TODO: exports pattern instead of inline usage.
(function () {
  setTimeout(function () {
    ReactDOM.render(<NewComponent />, $("#pio-teaser-app")[0]);
  }, 500); // Janky init code, perhaps you can refactor this!
})();
