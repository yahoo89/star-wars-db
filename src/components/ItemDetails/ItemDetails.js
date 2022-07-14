import React, { Component } from "react"
import SwapiService from "../../services/swapi-service"
import ErrorButton from "../ErrorButton/ErrorButton"
import Spinner from "../Spinner/Spinner"

import './ItemDetails.css'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {
  Record
}

export default class ItemDetails extends Component {

  swapiService = new SwapiService()

  state = {
    item: null,
    loading: true,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props

    this.setState({
      loading: true
    });

    if (!itemId) {
      return
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })
      .catch((error) => ('We catch error while updating the item:' + error));
  }



  render() {

    const { item, loading, image } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const childrens = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { item })
    })
    const content =
      !loading
        ? <PeopleDetailsView
          itemDetails={item}
          imageUrl={image}
          childrenProps={childrens}
        />
        : null;


    if (!this.state.item) {
      return <p>Select an item from a list</p>
    }

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const PeopleDetailsView = ({ itemDetails, imageUrl, childrenProps }) => {
  const {
    //id,
    name,
    gender,
    birthDate,
    eyeColor
  } = itemDetails;

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