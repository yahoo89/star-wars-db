import React from "react"
import ItemDetails from '../ItemDetails/ItemDetails'
import Record from '../ItemDetails/Record/Record'
import withSwapiService from "../HocHelpers/withSwapiService"

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPersone,
    getImageUrl: swapiService.getPersoneImage
  }
}

export default withSwapiService(PersonDetails, mapMethodsToProps)