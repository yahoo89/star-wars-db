import React from "react"
import ItemDetails from '../ItemDetails/ItemDetails'
import Record from '../ItemDetails/Record/Record'
import withSwapiService from "../HocHelpers/withSwapiService"

const StarshipDetails = (props) => {

  return (
    <ItemDetails {...props} >

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps)