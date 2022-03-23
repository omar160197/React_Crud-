import { Component } from "react";
import DeleteRow from "./deleteComponent";
import EditButton from "./editButton";

export default class ViewList extends Component {
  // console.log(props);
  constructor(props) {
    super(props);
  }


  render() {
    const listData = this.props.list.map((item, id) => {
      return (
        <tr key={id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.country}</td>
          <td>
            <DeleteRow
              selectedItem={item}
              ondeleteRowChildTwo={this.props.ondeleteRowChildOne}
            />
          </td>
          <td>
           <EditButton
           //togeler
           onShowEditMenu={this.props.showEditMenu}

           selectedItem={item}
           onEditeRowChildTwo={this.props.onEditeRowChildOne}
           />
          </td>
        </tr>
      );
    });
    return (
      <>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">delete</th>
              <th scope="col">edit</th>
            </tr>
          </thead>
          <tbody>{listData}</tbody>
        </table>
      </>
    );
  }
}
