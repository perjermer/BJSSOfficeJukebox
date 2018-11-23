import React, { Component } from "react";
import Songcard from "./Songcard";

class Songcards extends Component {
  state = {
    info: [
      {
        songname: "Devil in a new dress",
        album: "My Beautiful Dark Twisted Fantasy",
        author: "Kanye West"
      },
      {
        songname: "Devil in a new dress",
        album: "My Beautiful Dark Twisted Fantasy",
        author: "Kanye West"
      },
      {
        songname: "Devil in a new dress",
        album: "My Beautiful Dark Twisted Fantasy",
        author: "Kanye West"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Currently Playing</h1>

        <h1>Queue</h1>
        {this.state.info.map(card => (
          <Songcard info={card} />
        ))}
      </div>
    );
  }
}

export default Songcards;
