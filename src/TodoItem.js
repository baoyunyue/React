import React,{Component} from 'react';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelet=this.handleDelet.bind(this);
    }
    handleDelet(){
        
        this.props.delet(this.props.index);
    
    }
    render(){
        const{content}=this.props;
        return (
            <div onClick={this.handleDelet}>{content}</div>
        )
    }
}
export default TodoItem;