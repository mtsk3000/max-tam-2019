import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './App.css';

const Welcome = (props) => {
  return (
    <h1>Max is {props.word}</h1>
  );
}

const Header = styled.h1`
  color: #333;
  font-family: 'Work Sans', sans-serif;
  font-size: 50px;
  line-height: 60px;
  margin: 20px 20px;
`

const BigText = styled.h3`
  color: #333;
  font-family: 'Merriweather Sans', sans-serif;
  line-height: 40px;
  font-size: 30px;
  margin: 0;
`

const CompanyCard = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
  background-color: #F3F6F7;
  border-radius: 24px;
  border: none;
  max-width: 960px;
  justify-items: start;
  align-items: center;
  padding: 40px 80px 40px 0;
  grid-gap: 40px;
  min-height: 80px;
  margin: 20px 0;
`

const content = {
  intro1: "Hello, I\'m Max Tam.",
  intro2: "I\’m a product designer specialised in B2B & enterprise applications."
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content
    };
  }

  //---

  render() {
    return (
      <div className="app">
        <div className="banner">
          <Header>{this.state.content.intro1}<br/>{this.state.content.intro2}</Header>
        </div>
        <div className="content">
          
          <Header>Currently</Header>
          <CompanyCard>
            <div>IMG</div>
            <BigText>Making banking great for small businesses with Allica</BigText>
          </CompanyCard>
          <CompanyCard>
            <div>IMG</div>
            <BigText>Reinventing composite tooling production with Mouldbox</BigText>
          </CompanyCard>

          <Header>Previously</Header>
          <CompanyCard>
            <div>IMG</div>
            <BigText>Made selling software effortless with Paddle</BigText>
          </CompanyCard>
          <CompanyCard>
            <div>IMG</div>
            <BigText>Supercharged supplier collaboration & innovation
with Vizibl</BigText>
          </CompanyCard>
          <CompanyCard>
            <div>IMG</div>
            <BigText>Enabled communities to generate authentic video content for enterprises with Seenit</BigText>
          </CompanyCard>

        </div>
      </div>
    );
  }
}

export default App;