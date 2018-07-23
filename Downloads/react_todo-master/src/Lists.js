import React, {Component} from 'react';
import List from './List';

class Lists extends Component {
    render(){
        return (this.props.lists.map((e,i)=>(
            <List name={e.list} done={e.done} key={i} idx={i} check={this.props.check} del={this.props.del}/>
        )));
    }
}

export default Lists;