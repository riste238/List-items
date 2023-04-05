import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddNewItem from './form/AddNewItem';
import SearchItem from './form/SearchItem.js';
import UseReferenca from './UseReferenca';
import apiRequest from './apiRequest';


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null)
      }
      catch (err) {
        setFetchError(err.message)
      }
      finally {
        // when will came to finnaly block our browser, that means a data is arrived, data is delivered!
        setIsLoading(false)
      }
    }
    setTimeout(() => {

      (async () => await fetchItems())()
    }, 2000);
  }, [])


  const searchArticle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newItem) return;
    addItem(newItem);
    setNewItem('')
  }

  const setAndSaveItems = (newItems) => {
    setItems(newItems)


  }

  const addItem = async (item) => {

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const allItems = [...items, myNewItem];
    setItems(allItems)
    const postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(myNewItem)

    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result)
  }

  const handleCheckbox = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    // setItems(listItems)
    // localStorage.setItem("shoppingList", JSON.stringify(listItems))
    setItems(listItems)

  const myItem = listItems.filter(item => item.id === id);

  const updateOptions = {
    method: 'PATCH',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({checked: myItem[0].checked})
  }

  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions)
  if(result) setFetchError(result);
  }

  const deleteItem = async (id) => {
    const delItem = items.filter((item) => item.id !== id);
    // setItems(delItem)
    // localStorage.setItem('shoppingList', JSON.stringify(delItem))
    setItems(delItem)

    const deleteOptions = {method: 'DELETE'}
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, deleteOptions);
  if(result) setFetchError(result)


  }


  return (

    <div className="App">
      <header>

        <Header />
      </header>

      <AddNewItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        searchArticle={searchArticle}

      />
      <main>
        {isLoading && <p>`Data is loading...`</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content

          items={items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}

          setItems={setItems}
          handleCheckbox={handleCheckbox}
          deleteItem={deleteItem}

        />}
      </main>


      <footer>
        <UseReferenca />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
