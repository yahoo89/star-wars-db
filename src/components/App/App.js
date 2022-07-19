import React, { Component } from "react"

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import SwapiService from "../../services/swapi-service"
import DummySwapiService from "../../services/DummySwapiService"
import { PeoplePage, StarshipPage, PlanetPage } from "../pages"

import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context"

import './App.css'

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
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

  render() {

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className="app-container">
          <Header onServiceChange={this.onServiceChange} />

          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </div>
      </SwapiServiceProvider>
    )
  }
} 