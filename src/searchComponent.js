import { Component } from "react";

export default class Search extends Component{
constructor(props){
super(props)
this.state={
keyword:''
}}

textChanged=(e)=>{
this.setState({keyword:e.target.value})
this.props.onsearchTable(e.target.value)
}


render(){
    return(
        <div>
            <input type="text" placeholder="enter keyword"
            value={this.state.keyword}
            onChange={this.textChanged}
            ></input>
            <p>
              keyword: {this.state.keyword}  
            </p>
        </div>
    )
}


}