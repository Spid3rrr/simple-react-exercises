import { useState } from "react";

const NonEmptyInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
    setError(e.target.value === "");
  };

  const [error, setError] = useState(false);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      {error && <div style={{ color: "red" }}>This field cannot be empty</div>}
    </>
  );
};
export default NonEmptyInput;
