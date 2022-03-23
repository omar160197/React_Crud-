import { Component } from "react";

export default class AddRow extends Component {
  constructor(props) {
    super(props);
  }

  addRow = () => {
    let newRow = {
      id: document.querySelector("#txtID").value,
      name: document.querySelector("#txtName").value,
      age: document.querySelector("#txtAGE").value,
      country: document.querySelector("#txtCOUNTRY").value,
    };
    //clone
    this.props.onaddNewRowFromParent(newRow);
  };

  render() {
    return (
      <>
        <div>
          ID
          <br /> <input type="number" id="txtID" />
          <br />
          Name
          <br />
          <input type="text" id="txtName" />
          <br />
          Age
          <br />
          <input type="number" id="txtAGE" />
          <br />
          Country
          <br />
          <input type="text" id="txtCOUNTRY" />
          <br />
        </div>
        <button className="btn btn-primary" onClick={this.addRow}>
          addRow
        </button>
      </>
    );
  }
}
