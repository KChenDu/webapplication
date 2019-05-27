import React, { Component } from "react";
import Filedec from "./newfiledec";

class Counter extends Component {
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    return (
      <div>
        <h4>
          <center>{"infos do índice " + this.props.counter.id}</center>
        </h4>
        <center>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Decrement
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
          {/* aqui insiro grafico. Fazer um script js com if de decisão de tipo de arquivo. Return imagem*/}
          <p>
            {""}
            <Filedec
              archivepath={this.props.counter.datapath}
              value={this.props.counter.value}
            />

            {/*<img src={this.props.counter.datapath} alt="" align="center" />*/}
          </p>
        </center>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
