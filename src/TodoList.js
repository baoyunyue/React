import React, {Component,Fragment} from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleDelet=this.handleDelet.bind(this);
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
  handleInputChange(e){
    this.setState({inputValue: e.target.value });
  }
  
handleDelet(index){
  const list=[...this.state.list];
    list.splice(index,1);
    this.setState({list})
}

  render(){
  return (
    <Fragment>
     <div>
       <input value= {this.state.inputValue} onChange={this.handleInputChange}/>
       <button className='red-btn' onClick={this.handleBtnClick}>add</button>
     </div>
     <ul>
       {this.state.list.map((item,index)=>{
         
         return (
         <TodoItem 
         delet={this.handleDelet}  
         key= {index} 
         content={item} 
         index={index}/>);
       })}
     </ul>
    </Fragment>
  );
}
}

export default TodoList;