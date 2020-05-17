import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import EducationNav from "../components/educationNav"

export default () => {
    return(
        <div>
        <Header></Header>
        <EducationNav></EducationNav>
        <Repos></Repos>
        <Codigofacilito></Codigofacilito>
        </div>
    )
}
