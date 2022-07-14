import React, { Component } from "react"

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ItemList from '../ItemList/ItemList'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import PeoplePage from "../PeoplePage/PeoplePage"
import SwapiService from "../../services/swapi-service"
import Row from "../Row/Row"

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

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={this.swapiService.getPersone}
        getImageUrl={this.swapiService.getPersoneImage}
      >
        <Record field={'gender'} label={'gender'} />
        <Record field={'eyeColor'} label={'Eye Color'} />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImage}
      >
        <Record field={'model'} label={'Model'} />
        <Record field={'length'} label={'Length'} />
        <Record field={'costInCredits'} label={'Cost'} />
      </ItemDetails>
    )

    return (
      <div className="app-container">
        <Header />
        {/* <RandomPlanet /> */}

        <Row
          left={personDetails}
          right={starshipDetails}
        />

      </div>
    )
  }
}