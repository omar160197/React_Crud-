import { Component } from "react";

export default class EditButton extends Component{

    constructor(props) {
        super(props);
        this.state = {
          togeller: this.flag,
        };
      }
      flag = true;
render(){
    return(
        <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                
                this.flag=!this.flag;
                this.setState({
                  togeller: this.flag,
                });
                // console.log(this.state.togeller);
                this.props.onShowEditMenu(this.state.togeller);

                this.props.onEditeRowChildTwo(this.props.selectedItem);
              }}
            >
              edit
            </button>
        </div>
    )
}

}