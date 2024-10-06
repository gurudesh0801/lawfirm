import React, { useState } from "react";
import "./Information.css";

const Information = () => {
  const data = {
    "A Company": {
      options: ["a HR Service Adviser", "a Lawyer", "a Notary"],
      details: {
        "a HR Service Adviser": [
          "Improving Change Management",
          "Outsorsing your Company",
          "Defining Corporate Values",
        ],
        "a Lawyer": [
          "Buying or Selling Business",
          "disciplinary Measures",
          "Launching a Business",
        ],
        "a Notary": ["Buying or Selling a Commarcial Building ", "Other"],
      },
    },
    "A Person": {
      options: ["a Notary", "a Lawyer", "a Trademark Agent"],
      details: {
        "a Notary": [
          "Buying or Selling a Commarcial Building",
          "Buying or Selling Home",
          "Drafting a will",
        ],
        "a Lawyer": [
          "Buying or Selling Business",
          "Adopting a Child",
          "Launching a Business",
        ],
        "a Trademark Agent": [
          "Protect Your Trademark,name,or Domain",
          "Licensing trademarks",
          "Opposing a registration of a trademark",
        ],
      },
    },
    "An Organization": {
      options: ["a HR Service Adviser", "a Lawyer", "a Notary"],
      details: {
        "a HR Service Adviser": [
          "Improving Change Management",
          "Outsorsing your Company",
          "Defining Corporate Values",
        ],
        "a Lawyer": [
          "Buying or Selling Business",
          "disciplinary Measures",
          "Launching a Business",
        ],
        "a Notary": ["Buying or Selling a Commarcial Building ", "Other"],
      },
    },
  };

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  // Handle first dropdown change
  const handleFirstChange = (e) => {
    setFirstInput(e.target.value);
    setSecondInput("");
    setThirdInput("");
  };

  // Handle second dropdown change
  const handleSecondChange = (e) => {
    setSecondInput(e.target.value);
    setThirdInput("");
  };

  return (
    <form>
      <h1>Law Firm Information</h1>

      {/* Flexbox container for inputs */}
      <div className="form-group">
        {/* First Input: I Am */}
        <div className="input-box">
          <label htmlFor="firstInput">I Am:</label>
          <select
            id="firstInput"
            value={firstInput}
            onChange={handleFirstChange}
          >
            <option value="">-- Select --</option>
            <option value="A Company">A Company</option>
            <option value="A Person">A Person</option>
            <option value="An Organization">An Organization</option>
          </select>
        </div>

        {/* Second Input: Options based on first input */}
        {firstInput && (
          <div className="input-box">
            <label htmlFor="secondInput">I am Looking for:</label>
            <select
              id="secondInput"
              value={secondInput}
              onChange={handleSecondChange}
            >
              <option value="">-- Select --</option>
              {data[firstInput].options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Third Input: Details based on second input */}
        {secondInput && (
          <div className="input-box">
            <label htmlFor="thirdInput">To:</label>
            <select
              id="thirdInput"
              value={thirdInput}
              onChange={(e) => setThirdInput(e.target.value)}
            >
              <option value="">-- Select --</option>
              {data[firstInput].details[secondInput].map((detail) => (
                <option key={detail} value={detail}>
                  {detail}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Information;
