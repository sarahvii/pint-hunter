import React, {useState} from 'react';
import './App.css';

function App() {
    const [greeting, setGreeting] = useState("hello pint hunter!");
    const [total, setTotal] = useState(0);

    const handleClick = (name) => {
      setGreeting("hello " + name)
    }

    const numberOfPintsWanted = () => {
      setTotal(total + 1);
    }

    const [items, setItems] = useState([
      { name: "Guinness", isPurchased: false},
      { name: "Tennents", isPurchased: false},
      { name: "Jaipur", isPurchased: true}
    ])

    const [newItem, setNewItem] = useState("");

    const itemNodes = items.map((item, index) => {
      return (
        <li key={index} className={item.isPurchased ? "purchased" : "not-purchased"}>
          <span>{item.name}</span>
          {item.isPurchased ? <span className="purchased">Purchased!</span> : 
          <button onClick={() => purchaseItem(index)}>Buy Beer</button>}
          </li>
      )
    })

    const handleItemInput = (event) => {
      setNewItem(event.target.value)
    }

    const saveNewItem = (event) => {
      event.preventDefault();
      const copyItems = [...items]
      copyItems.push({name: newItem, isPurchased: false})
      setItems(copyItems)
      setNewItem("")
    }

    const purchaseItem = (index) => {
      const copyItems = [...items]
      const updatedItem = {...copyItems[index]}
      updatedItem.isPurchased = true
      copyItems[index] = updatedItem
      setItems(copyItems)
    }


  return (
    <>
    <h1>{greeting}</h1>
    <button onClick={() => handleClick("Bob")}>Change greeting</button>
    <p>I'd like {total} pints</p>
    <button onClick={numberOfPintsWanted}>Gimme pints</button>
    <ul>
      {itemNodes}
    </ul>

    <form onSubmit={saveNewItem}>
      <label htmlFor="new-item">Add a new item:</label>
      <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>
      <input type="submit" value="Save New Item" />
    </form>
    </>
  );
}

export default App;
