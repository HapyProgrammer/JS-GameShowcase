import React, { Component } from "react";
import "./Style.css";

class GameDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleCurrentSlide = this.handleCurrentSlide.bind(this);
    this.handleGoToNewSite = this.handleGoToNewSite.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.handleCurrentSlide(0);
  }
  handleCurrentSlide(number) {
    let element;
    for (let i = 0; i < this.props.games.images.length; i++) {
      if (i === number) {
        element = (
          <div className="slide-fade">
            <img src={this.props.games.images[i]} alt="ScreenShot" />
          </div>
        );
      }
    }
    this.setState({ photoSlide: element });
  }
  handleGoToNewSite() {
    window.location.href = this.props.games.link;
  }

  render() {
    return (
      <div className="game-section" id={this.props.games.title}>
        <div className="background-container">
          <img src={this.props.games.images[0]} alt="background" />
          <div className="fade-overlay" />
        </div>
        <div className="photos">{this.state.photoSlide}</div>
        <div className="dot-container">
          <div className="dot" onClick={() => this.handleCurrentSlide(0)} />
          {this.props.games.images[1] && (
            <div className="dot" onClick={() => this.handleCurrentSlide(1)} />
          )}
        </div>
        <div className="description">
          <h1>{this.props.games.title}</h1>
          {this.props.games.description}
          <button onClick={this.handleGoToNewSite}>Play</button>
        </div>
      </div>
    );
  }
}

export default GameDisplay;
