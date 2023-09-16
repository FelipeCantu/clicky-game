import React, { Component } from "react";
import Wrapper from "./components/Wrapper/wrapper";
import Header from "./components/Header/header";
import cards from "./cards.json";
import Card from "./components/Card/card";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
    gameOver: false, // Add a gameOver state
  };

  checkWin = () => {
    const allClicked = this.state.cards.every((card) => card.count > 0);
    if (allClicked) {
      alert(`You win! All cards clicked.`);
      this.setState({ gameOver: true });
    }
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    this.state.cards.forEach((card) => {
      card.count = 0;
    });
    alert(`Game Over: \nScore: ${this.state.score}`);
    this.setState({ score: 0 });
  };

  clickCounts = (id) => {
    if (!this.state.gameOver) { // Check if the game is over
      this.state.cards.find((o, i) => {
        if (o.id === id) {
          if (cards[i].count === 0) {
            cards[i].count = cards[i].count + 1;
            this.setState(
              { score: this.state.score + 1 },
              () => {
                console.log(this.state.score);
                this.checkWin(); // Check for a win after each click
              }
            );
            this.state.cards.sort(() => Math.random() - 0.5);
            return true;
          } else {
            this.endGame();
          }
        }
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
          Naruto Clicky Game
        </Header>
        {this.state.cards.map((card) => (
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
