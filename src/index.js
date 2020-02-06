import React from 'react';
import Presentation from "./presentation.js"

const fakeData =[
   {
       Week :"5",
       Department : "Web development",
       Topic : "node"
   },

{   Week :"4",
   Department : "Data Science",
   Topic : "Data camp"}
]

function DeadLineProgress(){
    return <Presentation deadlines={fakeData}/>
}
export default DeadLineProgress;