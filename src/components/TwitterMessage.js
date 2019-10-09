import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  };

  getRemainingChars = () => {
    let inputLength = this.state.message.length
    return this.props.maxChars - inputLength
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleMessage(event)}
          value={this.state.message}
        />
        <p>Character Count: {this.getRemainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
