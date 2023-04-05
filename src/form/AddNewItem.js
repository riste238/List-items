import { FaPlus } from 'react-icons/fa';
import {useRef} from 'react';


const AddNewItem = ({newItem, setNewItem, handleSubmit}) => {

    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={(e)=>{handleSubmit(e)}}>
            <label htmlFor="Add List Item">Add Item</label>
            <input type="text"
            // className='addForm'
                autoFocus
                id="addItem"
                ref={inputRef}
                placeholder="Add new item"
                required 
                value={newItem}
                onChange={(e)=> {setNewItem(e.target.value)}}/>
               <button
               onClick={()=> {inputRef.current.focus()}}
               type="submit"
               aria-label='Add item'
               ><FaPlus/></button>
        </form>
    )
}

export default AddNewItem;