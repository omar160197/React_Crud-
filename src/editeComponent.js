import { Component } from "react";

export default class EditeRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togeller: this.flag,

      UpdatedList: this.props.updatedList,

      Id: props.showSelectedItem.id,
      Name: props.showSelectedItem.name,
      Age: props.showSelectedItem.age,
      Country: props.showSelectedItem.country,
    };
  }
  flag = false;

  HandelInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          ID
          <br />{" "}
          <input
            type="text"
            id="txtID"
            value={this.state.Id}
            onChange={this.HandelInput}
            name="Id"
          />
          <br />
          Name
          <br />
          <input
            type="text"
            id="txtName"
            value={this.state.Name}
            onChange={this.HandelInput}
            name="Name"
          />
          <br />
          Age
          <br />
          <input
            type="text"
            id="txtID"
            value={this.state.Age}
            onChange={this.HandelInput}
            name="Age"
          />
          <br />
          Country
          <br />
          <input
            type="text"
            id="txtName"
            value={this.state.Country}
            onChange={this.HandelInput}
            name="Country"
          />
          <br />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            debugger;
            this.flag = !this.flag;
            this.setState({
              togeller: this.flag,
            });
            this.props.onShowEditMenu(this.state.togeller);

            let newUpdatedList = this.state.UpdatedList;

            for (let i = 0; i < newUpdatedList.length; i++) {
              if (newUpdatedList[i].id === this.props.showSelectedItem.id) {
                newUpdatedList[i].id = this.state.Id;
                newUpdatedList[i].name = this.state.Name;
                newUpdatedList[i].age = this.state.Age;
                newUpdatedList[i].country = this.state.Country;
              }
            }
          }}
        >
          Save
        </button>
      </>
    );
  }
}
