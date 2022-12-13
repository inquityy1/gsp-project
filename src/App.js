import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  let API_URL =
    "https://publishers.bandsintown.com/api/report?Dimensions=date,ad_unit_id&Metrics=imps,net_ecpm,earnings_net&Date_From=2022-12-01&Date_To=2022-12-10";
  let username = "b4a5f832a2e64678f7b6e7e311fac697";
  let password = "827c2892546047ee91882db1e36c5c55";

  const onButtonClick = () => {
    console.log(data);
  };

  useEffect(() => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        Authorization: "Basic",
      }),
    }) /*end fetch */
      .then((results) => results.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <p>hi</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

export default App;
