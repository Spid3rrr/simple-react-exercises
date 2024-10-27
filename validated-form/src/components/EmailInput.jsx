import { useState } from "react";

const EmailInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
    setEmptyError(e.target.value === "");
    setEmailError(!ValidateEmail(e.target.value));
  };

  const [emptyError, setEmptyError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      {emptyError && (
        <div style={{ color: "red" }}>This field cannot be empty</div>
      )}
      {emailError && (
        <div style={{ color: "red" }}>Please enter a valid email</div>
      )}
    </>
  );
};

// got this from https://www.w3resource.com/javascript/form/email-validation.php
function ValidateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

export default EmailInput;
