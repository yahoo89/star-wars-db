import React, { Component } from "react"

import Header from '../Header/Header'
//import RandomPlanet from '../RandomPlanet/RandomPlanet'
//import ItemList from '../ItemList/ItemList'
//import ItemDetails from '../ItemDetails/ItemDetails'
//import Record from '../ItemDetails/Record/Record'
//import PeoplePage from "../PeoplePage/PeoplePage"
import SwapiService from "../../services/swapi-service"
//import Row from "../Row/Row"

import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context"

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'

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
      <SwapiServiceProvider value={this.swapiService}>
        <div className="app-container">
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={5} />

          <PersonList />

          <PlanetList />

          <StarshipList />

        </div>
      </SwapiServiceProvider>
    )
  }
}