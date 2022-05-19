import React from "react"
import data from './data.json'
import ResInput from "./ResInput"
const Res=()=>{
const dataRes=JSON.parse(JSON.stringify(data.Restaurants))
const [resData,setRes]=React.useState(dataRes)  
return(
    <div>
      <h1>Res</h1>

      <p>
      {resData.map((elem)=>(
         <li>{elem.name}</li>
        ))
      }
      </p>
    </div>
  )
}
export default Res;