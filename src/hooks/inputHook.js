import { useState } from "react";

const useInput = (initialValue = "") => {
  console.log("initial", initialValue);
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const inputChangeHadler = (e) => {
    setValue(e.target.value);
    setError("");
  };

  return { value, setValue, error, setError, inputChangeHadler };
};



export default useInput;
