
import { useState, useCallback, useEffect } from "react";

function App() {
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < 10; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setRandomString(result);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h1>Random String Generator</h1>
      <h2>{randomString}</h2>
      <button onClick={generateString}>Generate New String</button>
    </div>
  );
}

export default App;
