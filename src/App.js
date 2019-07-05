import React, { Component } from "react";
import Images from "./components/ImagePack";
import GameDisplay from "./GameDisplay.jsx";
import { Link } from "react-scroll";
import "./Style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGameSections = this.handleGameSections.bind(this);
    this.state = {
      games: [
        {
          key: 0,
          title: "The Last Orc",
          images: [Images[11]],
          description: (
            <p>
              All the mobs have been hunted, except for one. You are the last
              orc and you are seeking revenge. Kill every human and collect the
              seals in order to progress further. Show them what it is like to
              be farmed.
            </p>
          ),
          link: "https://hapygames.itch.io/the-last-orc"
        },
        {
          key: 1,
          title: "The First Night",
          images: [Images[9], Images[10]],
          description: (
            <p>Game By Dustin and Hapy for the taira games gamejam.</p>
          ),
          link: "https://hapygames.itch.io/thefirstnight"
        },
        {
          key: 2,
          title: "Shadow Ranger",
          images: [Images[8]],
          description: <p>Mobile, action game where you play as a ranger.</p>,
          link: "https://connect.unity.com/p/shadow-ranger"
        },
        {
          key: 3,
          title: "Pixel Elevator",
          images: [Images[6], Images[7]],
          description: (
            <p>
              A unique arcade game where you try to keep your travelers alive on
              your platform.
              <br />
              Click and drag your platform to keep your travelers safe.
              <br />
              Avoid deadly hazards on your way up to space.
              <br />
              Earn enough coins to unlock special travelers that have unique
              attributes to help you on your journey.
            </p>
          ),
          link: "https://hapygames.itch.io/pixel-elevator"
        },
        {
          key: 4,
          title: "Luminator",
          images: [Images[4], Images[5]],
          description: (
            <p>
              A 2d top down dungeon crawler made for the 2018 Brackey's game
              jam. <br />
              You must find your way through this dark castle to light up the
              lumination pad. You can place lights by pressing Q, but be careful
              as you have a limited supply of energy. You must go to energy pads
              and press E to charge up, so make sure you have a safe place for
              energy pads. You must protect the main beacon. The shadow
              creatures are attracted to all sources of light so use that your
              your advantage.
            </p>
          ),
          link: "https://hapygames.itch.io/luminator"
        },
        {
          key: 5,
          title: "Immortal Protector",
          images: [Images[2], Images[3]],
          description: (
            <p>
              Pick up the red seeds and feed them to your birds. Watch as they
              multiply and collect the souls they drop when they die. Use the
              souls to buy perks.
              <br />
              Q to drop seeds
              <br />
              E to pick up
              <br />
              ESC to open shop
              <br />
              Made by Hapy (programmer), Watusi(3d models), BlackLunarFang
              (Programmer), Alola Falls(music)
            </p>
          ),
          link: "https://hapygames.itch.io/immortal-protector"
        },
        {
          key: 6,
          title: "Cryomage Cave",
          images: [Images[0], Images[1]],
          description: (
            <p>
              You were once an powerful wizard who brought balance to the world
              combating the fire wizard. Suddenly you were sealed off deep into
              a cave. Finally you were freed from the seal, but what has become
              of this world while you were gone.
            </p>
          ),

          link: "https://hapygames.itch.io/cryomagecave"
        }
      ]
    };
  }

  componentDidMount() {
    this.handleGameSections();
  }

  handleGameSections() {
    let gameSections = [];
    let navTitles = [];
    this.state.games.forEach(element => {
      const keystring = "title" + element.key.toString();
      const gameSection = <GameDisplay games={element} key={element.key} />;
      const navElement = (
        <Link
          className="link"
          key={keystring}
          activeClass="active"
          to={element.title}
          spy={true}
          smooth={true}
          offset={-60}
          duration={100}
        >
          <h3>{element.title}</h3>
        </Link>
      );
      gameSections.push(gameSection);
      navTitles.push(navElement);
    });
    this.setState({ gameElements: gameSections, navElements: navTitles });
  }

  render() {
    return (
      <div>
        <div className="nav-bar">{this.state.navElements}</div>
        <div className="game-showcase">{this.state.gameElements}</div>
      </div>
    );
  }
}

export default App;
