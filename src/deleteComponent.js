import { Component } from "react";

export default class DeleteRow extends Component{
constructor(props) {
    super(props)
}

OnRemove=()=>{
// console.log(this.props.selectedItem.id);
this.props.ondeleteRowChildTwo(this.props.selectedItem.id)

};

 
render(){
    return(
        <button className="btn btn-danger" onClick={this.OnRemove}>delete</button>
    )
}
}
