import { useState } from "react";
import "./App.css";
import NonEmptyInput from "./components/NonEmptyInput";
import EmailInput from "./components/EmailInput";
import PhoneNumberInput from "./components/PhoneNumberInput";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="main">
      <h1>This is a validated form! </h1>
      <div>
        First Name, Last Name and Password can&apos;t be empty.
        <br /> Email must be of valid format.
        <br /> Phone number must be 8 digits
      </div>
      <div>
        <div>First Name</div>
        <NonEmptyInput value={firstName} onChange={setFirstName} />
      </div>
      <div>
        <div>Last Name</div>
        <NonEmptyInput value={lastName} onChange={setLastName} />
      </div>
      <div>
        <div>Email</div>
        <EmailInput value={email} onChange={setEmail} />
      </div>
      <div>
        <div>Password</div>
        <NonEmptyInput value={password} onChange={setPassword} />
      </div>
      <div>
        <div>Phone Number</div>
        <PhoneNumberInput value={phoneNumber} onChange={setPhoneNumber} />
      </div>
    </div>
  );
}

export default App;
