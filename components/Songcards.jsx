import React, { Component } from "react";
import Songcard from "./Songcard";
import axios from "axios";

class Songcards extends Component {
  state = {
    songs: null
  };

  async componentDidMount() {
    const apiEndpoint = "http://localhost:3000/api/songs/";
    const response = await axios
      .get(apiEndpoint)
      .then()
      .catch(err => console.log(err));
    console.log(response.data);
    this.setState({ songs: response.data });
  }

  render() {
    return (
      <div>
        <h1>Currently Playing</h1>
        {this.state && this.state.songs && (
          <Songcard 
            song={this.state.songs[0].song}
            priority={Math.floor(Math.random() * (5 - 1 + 1) + 1)} 
          />
        )}
        <h1>Queue</h1>
        {this.state.songs &&
          this.state.songs
            .filter(song => this.state.songs.indexOf(song) != 0)
            .map(song => (
              <Songcard
                song={song.song}
                priority={Math.floor(Math.random() * (5 - 1 + 1) + 1)}
                key={song._id}
              />
            ))}
      </div>
    );
  }
}

export default Songcards;
