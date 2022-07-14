import React, { Component } from "react"
import SwapiService from "../../services/swapi-service"
import ItemList from "../ItemList/ItemList"
import PersonDetails from "../ItemDetails/ItemDetails"
import Row from "../Row/Row"
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry"


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  }

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}