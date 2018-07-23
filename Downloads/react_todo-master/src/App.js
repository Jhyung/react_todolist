import React, { Component } from 'react';
import Form from './Form';
import Lists from './Lists';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lists: [
        
      ],
      fin: 0,
      tempTask: "",
    }
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    // const newTask=this.state.tempTask; //event.target[0].value
    const newTask=event.target[0].value;
    const lists=this.state.lists;
    // console.log(newTask);
    this.setState({
      lists: [...lists,
        {list: newTask, done: false}
      ],
      len: lists.length+1,
      tempTask: "",
    });
  }

  handleUserInput=(event)=>{
    event.preventDefault();
    const temp=event.target.value;
    this.setState({
      tempTask: temp,
    });
    // console.log("type!");
  }

  handleCheck=(idx)=>{
    const fin=this.state.fin;
    let lists=this.state.lists;
    lists[idx].done=!lists[idx].done;
    this.setState({
      lists: lists,
      fin: (lists[idx].done===true)?fin+1:fin-1,
    });
  }

  handleDelete=(idx)=>{
    let lists=this.state.lists;
    const fixNum=(lists[idx].done===true)?1:0; // prevent bug
    const fin=this.state.fin;
    lists=lists.filter((e,i)=>i!==idx);
    // console.log(lists);
    this.setState({
      lists: lists,
      len: lists.length,
      fin: fin-fixNum,
    });
  }

  render() {
    const mod=this.state.len-this.state.fin;
    return (
      <div className="App" style={appStyle}>
        <div className="top" style={top}>
          <h1 style={topHeader}>전략공유게시판</h1>
        </div>
        <Form 
          onSubmit={this.handleSubmit} 
          onChange={this.handleUserInput} 
          value={this.state.tempTask}
        />
       
        <Lists 
          lists={this.state.lists} 
          check={this.handleCheck} 
          del={this.handleDelete}
        />
        <h3 style={tempInput}>{this.state.tempTask}</h3>
      </div>
    );
  }
}

const appStyle={
  marginLeft: "15%",
  marginRight: "15%",
  textAlign: "center",
  width: "70%",
  height: "500px",
}
const top={
  display: "flex",
  justifyContent: "space-between",
}
const topLine={
  marginTop: "34px",
  width: "35%",
  height: "2px",
  backgroundColor: "black",
}
const topHeader={
  width: "30%",
}
const tempInput={
  color: "gray",
}

export default App;
