import React,{useState} from 'react'
type info = {
  name : string,surname : string
}
const Home : React.FC<info> = ({name,surname} : info) => {
  return (
    <div>hi {name} {surname}</div>
  )
}

export default Home