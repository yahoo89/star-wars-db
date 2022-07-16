import React from "react"
import ItemDetails from '../ItemDetails/ItemDetails'
import Record from '../ItemDetails/Record/Record'
import withSwapiService from "../HocHelpers/withSwapiService"

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPersone, getPersoneImage } = swapiService
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPersone}
      getImageUrl={getPersoneImage} >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

export default withSwapiService(PersonDetails)