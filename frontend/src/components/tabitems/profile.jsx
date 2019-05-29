import React, { Component } from "react";

class Profile extends Component {
  state = {
    image: null,
    favarea: "Tecnologia/Computação"
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  };
  handleChange = event => {
    this.setState({ favarea: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { onInterest } = this.props;
    return (
      <div>
        <h6>
          <input
            type="file"
            onChange={this.onImageChange}
            className="filetype"
            id="group_image"
          />
        </h6>
        <h4>
          <img id="target" src={this.state.image} />
        </h4>{" "}
        <center>
          <h5>
            <form onSubmit={event => onInterest(this.state.favarea)}>
              <label>
                Escolha sua área de interesse:
                <select
                  favarea={this.state.favarea}
                  onChange={this.handleChange}
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
