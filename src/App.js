import React, { Component } from "react";
import Wrapper from "./components/Wrapper/wrapper";
import Header from "./components/Header/header";
import cards from "./cards.json";
import Card from "./components/Card/card";




class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over : \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  
  clickCounts = id => {
    this.state.cards.find((o, i) => {
      if(o.id === id) {
        if(cards[i].count === 0) {
          cards[i].count = cards[i].count +1; 
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5);
            return true;
        } 
        else {
          this.endGame();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Naruto Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCounts={this.clickCounts}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;