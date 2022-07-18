import React, { Component } from "react"

import Header from '../Header/Header'
//import RandomPlanet from '../RandomPlanet/RandomPlanet'
//import ItemList from '../ItemList/ItemList'
//import ItemDetails from '../ItemDetails/ItemDetails'
//import Record from '../ItemDetails/Record/Record'
//import PeoplePage from "../PeoplePage/PeoplePage"
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/DummySwapiService"
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

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService()
  }

  onServiceChange = () => [
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService : SwapiService
      return {
        swapiService: new Service()
      }
    })
  ]

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  render() {

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className="app-container">
          <Header onServiceChange={this.onServiceChange} />

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