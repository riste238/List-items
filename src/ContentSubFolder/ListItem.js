import {FaTrashAlt} from 'react-icons/fa';


const ListItem = ({item,handleCheckbox, deleteItem}) => {
    return(
        <li className="item" key={item.id}>
                            <input type="checkbox"
                                onClick={() => handleCheckbox(item.id)}
                                checked={item.checked}

                            />
                            <label
                            style={(item.checked) ? {textDecoration: "line-through"}: null}
                                onDoubleClick={() => handleCheckbox(item.id)}>
                                {item.item}
                            </label>
                            <FaTrashAlt onClick={()=> {deleteItem(item.id)}}/>
                        </li>
    )
}

export default ListItem