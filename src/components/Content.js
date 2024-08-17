import Main from "./Main";
import Footer from "./Footer";
import AddItem from './AddItem';
import SearchItem from "./SearchItem";
import { useState } from "react";

const Content = () => {
        const [items, setItems] = useState([
            {
                id: 1,
                checked: true,
                item: "One half pound bag of Cocoa Covered Almonds Unsalted"
            },
            {
                id: 2,
                checked: false,
                item: "Item 2"
            },
            {
                id: 3,
                checked: false,
                item: "Item 3"
            }
        ]);

        const [newItem,setnewItem] = useState('');//state for newly added item

        const [search, setSearch] = useState('');
        const setAndSaveItems = (newItems) =>
        {
            setItems(newItems);
            localStorage.setItem('shoppinglist', JSON.stringify(newItems));
        }

        const addItem = (item) =>{
            const id = items.length ? items[items.length-1].id+1 : 1;
            const myNewItem = {id,checked: false, item};
            const listItems = [...items , myNewItem];
            setAndSaveItems(listItems);
        }

        const handleCheck = (id) => {
            const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
           setAndSaveItems(listItems);
        }
    
        const handleDelete = (id) => {
            const listItems = items.filter((item) => item.id !== id);
            setAndSaveItems(listItems);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if(!newItem) return; //if the input received is empty

            addItem(newItem);
            setnewItem('');
        }
  
  
    return (
            <div>
                   <AddItem 
                    newItem = {newItem}
                    setnewItem = {setnewItem}
                    handleSubmit = {handleSubmit}
                    />
                    <SearchItem
                    search = {search}
                    setSearch = {setSearch}
                    />
                <Main 
                items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                setItems={setItems}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
             
                  <Footer 
                length={items.length}
                />
            </div>
  )
}

export default Content