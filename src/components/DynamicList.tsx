import { useState } from "react";
export default function DynamicList() {
    const [items, setItems] = useState<string[]>([]);
    const [item, setItem] = useState<string>("");
  return (
      <div className="mt-24">
        <input type="text" placeholder="add an item" onChange={(e) => setItem(e.target.value)}/>
        <button className="border border-green-300 rounded-lg px-2 py-1" onClick={() => setItems([...items, item])}>add to list</button>
          <ul>
              { items && items.map((item) => (
                  <li key={item}>{item}</li>
              ))}
          </ul>
    </div>
  )
}
