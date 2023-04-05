import react from 'react';
import ListItem from './ContentSubFolder/ListItem';
const Content = ({items,deleteItem,handleCheckbox}) => {

 

    return (
        <>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                      <ListItem 
                      key=  {item.id}
                      item={item}
                      handleCheckbox={handleCheckbox}
                      deleteItem={deleteItem}
                      />
                    ))}
                </ul>
            ) : <p>Your list is empty!</p>}
        </>

    )
}
export default Content;