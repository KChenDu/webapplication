import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  Hint,
  MarkSeries
} from "react-vis";

const mapMonth = {
  jan: 0,
  fev: 1,
  mar: 2,
  abr: 3,
  mai: 4,
  jun: 5,
  jul: 6,
  ago: 7,
  set: 8,
  out: 9,
  nov: 10,
  dez: 11
};

const allPath = [
  "data/example3.csv",
  "data/example30.csv",
  "data/example32.csv",
  "data/example33.csv"
];

class Filedec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      archivepath: this.props.archivepath,
      value: null
    };
  }

  componentDidMount = () => {
    this.getData(this.state.archivepath);
  };

  getData = () => {
    fetch(this.state.archivepath)
      .then(file => file.text())
      .then(file => {
        let data = this.state.data;
        data.push(
          file
            .toString()
            .split("\n")
            .map(row => row.split(";"))
        );
        this.setState({ data: data });
      });
  };

  parseCSVtoObj = data => {
    let newdata = data.map(function(x) {
      if (x[1]) {
        let date = x[0].split("/");
        return [
          new Date(
            parseInt("20" + date[2]),
            parseInt(mapMonth[date[1]]),
            parseInt(date[0])
          ),
          parseFloat(x[1].replace(",", "."))
        ];
      }
    });

    let dataArr = newdata.map(d => {
      if (d) {
        return { x: d[0], y: d[1] };
      }
    });

    dataArr = dataArr.filter(d => d);
    return dataArr;
  };

  parseObjToHTML = data => {
    return (
      <XYPlot xType="time" width={1000} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
          onNearestX={this._rememberValue}
          //onValueMouseOver={this._rememberValue}
          //onValueMouseOut={this._forgetValue}
          data={data}
        />
        {this.state.value ? (
          <Hint
            value={this.state.value}
            align={{
              horizontal: Hint.ALIGN.AUTO,
              vertical: Hint.ALIGN.TOP_EDGE
            }}
          />
        ) : null}
      </XYPlot>
    );
  };

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({ value });
  };

  render() {
    let data = this.state.data;
    let charts = data.map(x => this.parseObjToHTML(this.parseCSVtoObj(x)));

    return (
      <div>
        <p>
          {
            //reader.readAsBinaryString(f)
          }
          {charts}
        </p>
      </div>
    );
  }
}

export default Filedec;
