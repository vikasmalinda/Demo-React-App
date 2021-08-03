import React from "react";

class Addition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (<div><h1>{this.props.msg} {this.props.msg1} First React Component</h1></div>);
    }
}
 
export default Addition;