import React, { Component } from "react";

class Songcard extends Component {
  render() {
    const { songObj, priority } = this.props;
    const song = songObj.song.song;
    const user = songObj.username;
    const colour = "priority-" + priority + " card-body";

    return (
      <React.Fragment>
        {!song
          ?
          <h1>You shouldn't be seeing this</h1>
          :
          <div className={this.props.currentSong ? "song-card-play" : "song-card"}>
            <table className="card-table" width="100%">
              <tbody>
                <tr>
                  <td width="121" className="card-image">
                    <img
                      className="card-art"
                      src={song.album.images[1].url}
                      width="121"
                    />
                  </td>
                  <td className="card-header-body">
                    <p className="card-priority">Priority:&nbsp;<span className={colour + " circle"}></span></p>
                    <h5 className="card-title">{song.name}</h5>
                    <h6 className="card-subtitle mb-2">
                      {song.album.name + ", " + song.artists[0].name}
                    </h6>
                    {song.explicit ? <img id="explicit_tag" src="static/explicit.png" width="70px" /> : null}
                    <a href="#" className="card-link">More info</a>
                    <p className="card-text song-card-user">
                      Requested by: {user}
                    </p>
                  </td>
                  <td className="delete-song">
                    <button onClick={() => this.props.onDelete(songObj._id)} type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Songcard;
