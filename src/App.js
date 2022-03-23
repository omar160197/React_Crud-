import { Component } from "react";
import Search from "./searchComponent";
import dataList from "./data.json";
import ViewList from "./viewList";
import AddRow from "./addRow";
import EditeRow from "./editeComponent";
export default class MyList extends Component {
  constructor() {
    super();
    this.state = {
      NewList: dataList,
      filterdList: dataList,
      showEditMenu: false,
      selectedRow: {},
    };
  }

  addNewRowFromParent = (newRow) => {
    let UpdatedList = this.state.NewList;
    UpdatedList.push(newRow);
    this.setState({
      NewList: UpdatedList,
    });
  };

  deleteRow = (rowId) => {
    let deletedList = this.state.NewList;

    for (var i = 0; i < deletedList.length; i++) {
      var obj = deletedList[i];
      if (obj.id == rowId) {
        deletedList.splice(i, 1);
        this.setState({
          NewList: deletedList,
        });
      }
    }
  };

  selectRow = (item) => {
    let rowItem = item;
    this.setState({
      selectedRow: rowItem,
    });
  };

  updateRow = (newListFromChild) => {
    this.setState({
      NewList: newListFromChild,
    });
  };

  searchTable = (keyword) => {
    const filterdList = this.state.NewList.filter((item) => {
      return item.name.toLowerCase().includes(keyword);
    });
    this.setState({
      filterdList: filterdList,
    });
  };

  showEdit = (togeller) => {
    this.setState({
      showEditMenu: togeller,
    });
  };

  render() {
    if (!this.state.showEditMenu) {
      return (
        <div>
          <Search onsearchTable={this.searchTable} />
          <br />
          <ViewList
            list={this.state.filterdList}
            showEditMenu={this.showEdit}
            ondeleteRowChildOne={this.deleteRow}
            onEditeRowChildOne={this.selectRow}
          />
          <br />
          <AddRow onaddNewRowFromParent={this.addNewRowFromParent} />
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <br />
          <EditeRow
            //toggel
            onShowEditMenu={this.showEdit}
            showSelectedItem={this.state.selectedRow}
            updatedList={this.state.NewList}
            onUpdatedList={this.updateRow}
          />
          <br />
        </div>
      );
    }
  }
}
