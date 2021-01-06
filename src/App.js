import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

import "./styles.css"

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <input type="text" placeholder="Arayacağın ülke..." onChange={(e) => setSearchTerm(e.target.value)}/>

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        } 
      }).map((val,key) => {
        return (
          <div className="user" key={key}>
            <p> {val.first_name}  </p>
          </div>
          )
      })}
    </div>
  )
}

export default App
