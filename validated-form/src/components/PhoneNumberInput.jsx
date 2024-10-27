import { useState } from "react";

const PhoneNumberInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
    setEmptyError(e.target.value === "");
    setPhoneNumberError(!validatePhoneNumber(e.target.value));
  };

  const [emptyError, setEmptyError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      {emptyError && (
        <div style={{ color: "red" }}>This field cannot be empty</div>
      )}
      {phoneNumberError && (
        <div style={{ color: "red" }}>Number must be valid</div>
      )}
    </>
  );
};

const validatePhoneNumber = (phoneNumber) => {
  return /^\d{8}$/.test(phoneNumber);
};

export default PhoneNumberInput;
