import React, { useEffect, useState } from 'react';
import PieChart from "./pie";
function App() {
  let [loding, setLoding] = useState(true)
  let [data, setData] = useState(true)
  useEffect(() => {
    let fetchDosa = async () => {
      setLoding(true)
      let dosa = await fetch("http://localhost:4000/viewuser")
      console.log(dosa)
      let json = await dosa.json()
      setData(json)
      console.log(json)
      setLoding(false)
    }
    fetchDosa()
  }, [])
  return (

    <>
      {!loding && <div className="App">
        <PieChart data={data} />

      </div>
      }
    </>
  );
}

export default App;
