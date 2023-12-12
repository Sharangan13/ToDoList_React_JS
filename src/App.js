
import { useState } from 'react';
import './App.css';
import Body from './Body';
import AddList from './AddList';
import SearchItem from './SearchItem';

function App() {
  const [item,setItem]=useState(
    
    JSON.parse(localStorage.getItem("MY_List"))
  );


  const HandleCheck=(id)=>{

    const listItems=item.map((items)=>(items.id===id)?{...items,check:!items.check}:items)
    setItem(listItems);
    localStorage.setItem("MY_List", JSON.stringify(listItems))
  }

  const HandleDelete=(id)=>{

    const lists=item.filter((itemss)=>(itemss.id!==id))
    setItem(lists)
    localStorage.setItem("MY_List", JSON.stringify(lists))
   
  }


  const [addItem,setAddItem]=useState('')

  const addItems=(ee)=>{

    const id=item.length? item[item.length-1].id +1 :1
    const newList={id ,check:false,lable:ee}
    const newListItems=[...item, newList]
    setItem(newListItems)
    localStorage.setItem("MY_List", JSON.stringify(newListItems))

   
    
  }

 

  const HandleAdd=(e)=>{
    e.preventDefault();
    if(!addItem) return;
    addItems(addItem)
    setAddItem('');
   

    
  }


  const [search,setSearch]=useState('')

 



  return (
    <div>

     <AddList 
      addItem={addItem}
      setAddItem={setAddItem}
      HandleAdd={HandleAdd}
      
      />

      <SearchItem
      search={search}
      setSearch={setSearch}
      
      />
      <Body 
      item={item.filter((item)=>(item.lable.toLowerCase()).includes(search.toLowerCase()))}
      setItem={setItem}
      HandleCheck={HandleCheck}
      HandleDelete={HandleDelete}
      />

     
    </div>
  )
}

export default App;
