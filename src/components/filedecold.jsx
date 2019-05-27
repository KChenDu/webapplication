import React, { Component, useState, useEffect } from "react";
import * as XLSX from "xlsx";

const Filedec = props => {
  const { archivepath } = props;
  const onClick = () => {
    console.log("clicked!");
  };

  return (
    <div>
      <p>
        <button onClick={e => onClick()} className="btn btn-secondary btn-sm">
          Click
        </button>
        {
          //reader.readAsBinaryString(f)
        }
        <img src={archivepath} alt="" align="center" />
      </p>
    </div>
  );
};

export default Filedec;
