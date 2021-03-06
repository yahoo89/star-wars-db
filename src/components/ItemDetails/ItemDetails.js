import React, { Component } from "react"
import SwapiService from "../../services/swapi-service"
import Spinner from "../Spinner/Spinner"
import ItemDetailsView from "./ItemDetailsView/ItemDetailsView"

import './ItemDetails.css'


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
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props

    this.setState({
      loading: true
    })

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
        ? <ItemDetailsView
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