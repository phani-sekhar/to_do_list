import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingLists from "./PackingLists";

import Stats from "./Stats";

export default function App() {
  // For items calculation
  const [items, setItems] = useState([]);

  // Adding new items
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  // Deleting the existing  items
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  // Checking the item
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // Clearing the list
  function handleClearList() {
    const confirm = window.confirm("Are you sure want to clear the list?");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLists
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleitem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
