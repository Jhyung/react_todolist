import React, {Component} from 'react';

class List extends Component {
    render(){
        const listStyle={
            color: (this.props.done!==true)?"black":"gray",
            textDecoration: (this.props.done===true)?"line-through":"",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            height: "40px",
        }
        const idx=this.props.idx;
        return (
            <div style={listStyle}>
                <input type="checkbox" style={{marginRight: "10px"}} onClick={()=>this.props.check(idx)} checked={this.props.done}/>
                <h3 style={{marginRight: "10px"}}>{this.props.name}</h3>
                <input type="button" value="x" 
                style={{':hover':{backgroundColor: "red"}}}
                onClick={()=>this.props.del(idx)}/>
            </div>
        );
    }
}


export default List;
