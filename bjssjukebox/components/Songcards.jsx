import React, { Component } from "react";
import Songcard from "./Songcard";

class Songcards extends Component {
  state = {
    info: [
      {
        artpath: "static/sample-album-art1.png",
        songname: "Devil in a New Dress",
        album: "My Beautiful Dark Twisted Fantasy",
        author: "Kanye West",
        priority: 1,
        reqBy: "perjermer"
      },
      {
        artpath: "static/sample-album-art2.png",
        songname: "Ultralight Beam",
        album: "The Life of Pablo",
        author: "Kanye West",
        priority: 2,
        reqBy: "perjermer"
      },
      {
        artpath: "static/sample-album-art3.png",
        songname: "November",
        album: "Flower Boy",
        author: "Tyler the Creator",
        priority: 3,
        reqBy: "perjermer"
      },
      {
        artpath: "static/sample-album-art4.png",
        songname: "NO FUN",
        album: "BALLADS1",
        author: "Joji",
        priority: 4,
        reqBy: "perjermer"
      },
      {
        artpath: "static/sample-album-art5.png",
        songname: "All Mine",
        album: "Ye",
        author: "Kanye West",
        priority: 5,
        reqBy: "perjermer"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Currently Playing</h1>
        <Songcard info={this.state.info[0]} />
        <h1>Queue</h1>
        {this.state.info
          .filter(card => this.state.info.indexOf(card) != 0)
          .map(card => (
            <Songcard info={card} key={card.songname} />
          ))}
      </div>
    );
  }
}

export default Songcards;
