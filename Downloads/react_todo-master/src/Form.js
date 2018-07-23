import React, {Component} from 'react';

class Form extends Component {
    render(){
        return (
            <form style={form} onSubmit={this.props.onSubmit}>
                <input type="text" name="newTask" className="inputTask" style={input}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    autoComplete="off"/>
                <button type="submit" style={button}>추가</button>
            </form>
        );
    }
}

const form={
    display: "flex",
    justifyContent: "center",
}
const input={
    width: "80%",
    height: "30px",
    border: "2px solid black",
    marginRight: "5px",
}

const button={
    width: "80px",
    height: "36px",
    backgroundColor: "#2d6bce",
    color: "white",
    fontSize: "15px",
    border: "none",
}
export default Form;