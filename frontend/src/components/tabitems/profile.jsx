import React, { Component } from "react";

class Profile extends Component {
  state = {
    favarea: "Tecnologia/Computação"
  };

  handleChange = event => {
    this.setState({ favarea: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { personalinterest, onInterest, profilephoto, onPhoto } = this.props;
    return (
      <div>
        <h6>
          <input
            type="file"
            onChange={onPhoto}
            className="filetype"
            id="group_image"
          />
        </h6>
        <h4>
          <img id="target" src={profilephoto} />
        </h4>{" "}
        <center>
          <h5>
            <form onSubmit={event => onInterest(this.state.favarea)}>
              <label>
                Escolha sua área de interesse:
                <select
                  favarea={this.state.favarea}
                  onChange={this.handleChange}
                  defaultValue={personalinterest}
                >
                  <option favarea="tech">Tecnologia/Computação</option>
                  <option favarea="finances">Mercado Financeiro</option>
                  <option favarea="consulting">Consultoria</option>
                  <option favarea="industry">Indústria</option>
                  <option favarea="education">Educação</option>
                </select>
              </label>
              <input type="submit" favarea="Submit" />
            </form>
          </h5>
        </center>
      </div>
    );
  }
}

export default Profile;
