import React from "react"
import TopCities from "./assets/Components/TopCities"
import Search from "./assets/Components/Search"
import DateTime from "./assets/Components/DateTime"
import Details from "./assets/Components/Details"
import Forecast from "./assets/Components/Forecast"

function App() {


  return (
    <div className="flex justify-center ">
     <div className="flex flex-col justify-center bg-purple-800 w-4/5 lg:w-2/4 p-5 m-5 rounded-xl">
      <div className="flex flex-col justify-center ">
       <TopCities/>
       <Search/>
       <DateTime/>
       <Details/>
    </div>
    <Forecast time={"Hourly"}/>
    <Forecast time={"Daily"}/>
    </div>
    </div>
  )
}

export default App
