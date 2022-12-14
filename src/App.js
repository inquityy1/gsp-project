import axios from "axios";
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
    axios
      .post(API_URL, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": API_URL,
          "Access-Control-Allow-Methods": "POST",
        },
        data: JSON.stringify({
          username: username,
          password: password,
        }),
        mode: "no-cors",
      })
      .then((results) => results.json())
      .then((data) => setData(data));
  });

  // const agent = new https.Agent({
  //   rejectUnauthorized: false
  // })

  // let API_URL =
  //   "https://publishers.bandsintown.com/api/report?Dimensions=date,ad_unit_id&Metrics=imps,net_ecpm,earnings_net&Date_From=2022-12-01&Date_To=2022-12-10";
  // let username = "b4a5f832a2e64678f7b6e7e311fac697";
  // let password = "827c2892546047ee91882db1e36c5c55";

  // const onButtonClick = () => {
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetch(API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //       'Authorization': "Basic",
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //     agent: agent
  //   }) /*end fetch */
  //     .then((results) => results.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="App">
      <p>hi</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

export default App;
