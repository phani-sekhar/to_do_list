import { useState } from "react";
import Item from "./Item";

export default function PackingLists({
  items,
  onDeleteItem,
  onToggleitem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("description");
  let sortedItems;
  // sort by input
  if (sortBy === "input") sortedItems = items;
  // sort by name
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // sort by packing status
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleitem={onToggleitem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by name</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
