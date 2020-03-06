import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      value:""
=======
      message:"",
      restChar:this.props.maxChars 
>>>>>>> 00d785b5b8f4646bd64e4ebaa6eab92f3bd76374
    };
  }
  
  handleChange=event=>{
<<<<<<< HEAD
    this.setState({
      value:event.target.value
    })
=======
    this.setState(){
      message:event.target.value,
      restChar:this.props.maxChars-this.state.message.length
    }
>>>>>>> 00d785b5b8f4646bd64e4ebaa6eab92f3bd76374
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}/>
        <h2>remainder chars: {this.props.maxChars - this.state.value.length}</h2>
=======
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange(event)}/>
>>>>>>> 00d785b5b8f4646bd64e4ebaa6eab92f3bd76374
      </div>
    );
  }
}

export default TwitterMessage;
