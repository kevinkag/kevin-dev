import React from "react"
import FloatBar from "../../organisms/FloatBar/FloatBar"
import Bio from "../Bio/Bio"
import Frontpage from "../Frontpage/Frontpage"
import api from '../../../services/api'
import Briefcase from "../Briefcase/Briefcase"

const Home = () => {
 
  const float_bar = api.buttons_bar

  return(
    <>
    <Frontpage />
    <Bio/>
    <Briefcase/>
    <FloatBar item={float_bar}/>
    </>
  )
}

export default Home