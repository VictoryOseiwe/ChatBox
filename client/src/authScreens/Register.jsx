import Button from "../components/Button";
import { FormSection, FormInput } from "../components/FormComponent";
import "./Auth.css";
import { Eye, EyeOff } from "../components/Icons";
import { useState } from "react";

export default function Register() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(EyeOff);

  function showPassword() {
    if (type === "password") {
      setType("text");
      setIcon(Eye);
    } else {
      setType("password");
      setIcon(EyeOff);
    }
  }
  return (
    <>
      <div className="authcontainer">
        <div className="registercontainer">
          <div className="registercontainerfirstgrid">
            <h3>ChatBox</h3>
            <h2>Your Gateway to Seamless Online Conversations</h2>
            <p>
              Experience Seamless and remote communication with{" "}
              <span>ChatBox</span>
            </p>
          </div>
          <div className="registercontainersecondgrid">
            <h3>Sign Up For An Account</h3>
            <p>Enter Your Personal Data To Create Your Account</p>
            <Button className="googlebtn" text={"Google"} />
            <div className="signup-form">
              <FormSection>
                <FormInput
                  label="First Name"
                  type={type}
                  name="firstname"
                  placeholder="eg.Jogn"
                  required
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  name="lastname"
                  placeholder="eg.Smith"
                  required
                />
              </FormSection>

              <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="eg.johnsmith@gmail.com"
                required
              />

              <div className="passwordcontainer">
                <label>Password</label>
                <div className="passwordinput">
                  <input type={type} required />
                  <button onClick={showPassword}>{icon}</button>
                </div>
                <p>Must be at least 8 characters</p>
              </div>

              <Button className="registerbtn" text="Sign Up" />
            </div>
            <p>
              Already have an account?{" "}
              <span>
                <a href="/login">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
