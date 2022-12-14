import { useEffect, useState } from 'react'
import base64 from 'base-64';
import './App.css'

function App() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const API_LINK = 'https://publishers.bandsintown.com/api/report?Dimensions=date,ad_unit_id&Metrics=imps,net_ecpm,earnings_net&Date_From=2022-12-01&Date_To=2022-12-10'
  const [data, setData] = useState('')

  let username = 'b4a5f832a2e64678f7b6e7e311fac697';
  let password = '827c2892546047ee91882db1e36c5c55';
  let headers = new Headers();

  headers.append('Authorization', 'Basic' + base64.encode(username + ':' + password));

  useEffect(() => {
    fetch(API_LINK, {
            method: 'POST',
            headers: headers,
        }) /*end fetch */
        .then(results => results.json())
        .then(data => setData({ data: data })
        )
  }, [])

const onClickButton = () => {
  console.log(data);     
}

  return (
    <div className="App">
      <p>hi</p>
      <button onClick={onClickButton}>click me!</button>
    </div>
  )
}

export default App
