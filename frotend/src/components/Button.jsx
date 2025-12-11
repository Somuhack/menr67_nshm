// import React from 'react'
// import "../assets/css/btn.css"

// const Button = ({name,bgcol,col}) => {

//    const mystyle={backgroundColor:"green",color:"white"}
//   return (
//     <button style={{backgroundColor:bgcol,color:col}}>{name}</button>
//   )
// }

// export default Button
import React from 'react'
import "../assets/css/btn.css"
import btnstyle from "./button.module.css"
const Button = ({bgcol,col,text}) => {
    
  return (
    <button className={btnstyle.btn} style={bgcol && col  && {backgroundColor:bgcol,color:col,border:"1px solid grey" }}>{text}</button>
  )
}

export default Button