import { Component } from 'react/cjs/react.production.min';
import TodoItems from './component/todoitems/Todoitems';
import AddItems from './component/additems/Additems';

class App extends Component{
  state={
    items:[
      {id:1 , name: "alaa edine " , age:23 },
      {id:2 , name: "Hamza " , age:25 },
      {id:3 , name: "akram " , age:30 },
    ]
  }

  // delete items
/// Methode 01 :
  //deleteItems = (id)=>{
  //  let items = this.state.items;
  //  let i = items.findIndex(item => item.id === id)
  //  items.splice(i , 1)
  //  this.setState({items})
  //}
 
/// Methode 02 :
  deleteItems = (id)=>{
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  //// Add item
  addItem= (item)=>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }


  render(){
    return(
      <div className='App container'>
         <h1 className='text-center'>TodoList</h1>
        <TodoItems items = {this.state.items} deleteItems = {this.deleteItems}  />
        <AddItems addItem= {this.addItem}/>
      </div>
    )
  }
}

export default App;
