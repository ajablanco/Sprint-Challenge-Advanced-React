import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import NavBar from "./components/NavBar";

const Header = styled.h1`
  text-align: center;
  width: 100%;
`;

const PlayerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 300px;
  border: 1px solid black;
  margin: 2% auto;
  text-align: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log(response.data);
      this.setState({
        players: response.data
      });
    });
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Header>
          Women's World Cup Players
        </Header>
        {this.state.players.map(players => {
          return (
            <PlayerCard>
              <div>
                <p>Name: {players.name}</p>
                <p>Country: {players.country}</p>
                <p>Searches: {players.searches}</p>
              </div>
            </PlayerCard>
          );
        })}
      </Container>
    );
  }
}

export default App;