import React, { Component } from "react"

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'
import PeoplePage from "../PeoplePage/PeoplePage"
import SwapiService from "../../services/swapi-service"

import './App.css'

export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}