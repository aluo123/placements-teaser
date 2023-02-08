const { useRef, useState } = React;

function adjustmentsRenderer(item, key, onSave) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(item[key]);
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    const newItem = {
      ...item,
      adjustments: inputValue,
    };
    console.log(newItem);
    onSave(newItem);
    toggleEdit();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleSave();
    }
  };

  const formattedValue = formatter.format(inputValue);

  if (!isEditing) {
    return (
      <div className="editable-cell-value-wrap" onClick={toggleEdit}>
        {formattedValue}
      </div>
    );
  }

  return (
    <div className="editable-cell">
      $
      <input
        className="form-control"
        ref={inputRef}
        type="number"
        step={0.01}
        value={inputValue}
        onBlur={handleSave}
        onChange={handleChange}
        onKeyUp={handleKeyDown}
      />
    </div>
  );
}
