import React from 'react'

const AddList = ({addItem,setAddItem,HandleAdd}) => {

   
  return (
    
        <form onSubmit={HandleAdd}>
            
            <input type='text'
            autoFocus
            required
            value={addItem}
            onChange={(e) => setAddItem(e.target.value)} 
           
                
            
            />
            <button>Add List</button>
        </form>
    
  )
}

export default AddList