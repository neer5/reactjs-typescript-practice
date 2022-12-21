import { useEffect, useState } from 'react';
import { Item } from '../../types/todo';
import "../../App.css";
export const Todo = () => {
  const [itemName, setItemName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [items, setItems] = useState<Item[]>([] as Item[]);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setItems([]);
  }, []);
  const deleteItem = (id: number) => {
    // const id = +e.currentTarget.getAttribute("data-id");
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };
  const addItem = () => {
    if(!itemName.length){
      setError('Please enter item name')
    }
    else if(itemName.length <= 3){
      setError('Item name length should be greater than or equal to 3')
    }
    else{
      const nextId = id + 1;
      setId(nextId);
      items.push({
        id: nextId,
        name: itemName
      });
      setItems(items);
      setItemName('');
      setError('');
    }
  };
  return (
    <>
      <h2>This is todo app</h2>
      Name
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <div 
      className='error'>{error}</div>
      <button className="submit" onClick={addItem}>
        Submit
      </button>
      <br />
      
        <table id="items">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {items.length ? 
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteItem(item.id)}
                    value={item.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          : (
            <tr >
                <td colSpan={3}>No items</td>
              </tr>
          )}
          </tbody>
        </table>
    </>
  );
};
