import React from "react"
import ErrorButton from "../../ErrorButton/ErrorButton"

const ItemDetailsView = ({ itemDetails, imageUrl, childrenProps }) => {
  const { name } = itemDetails

  return (
    <>
      <img
        className="item-image"
        src={imageUrl}
        alt={name}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {childrenProps}
        </ul>
        <ErrorButton />
      </div>
    </>
  )
}

export default ItemDetailsView