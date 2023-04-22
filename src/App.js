import {useReducer} from 'react';
import { React } from 'react';
import './App.css';
const initialBoxList = [
  {
    id: 1,
    content: "Todo item 1",
    status: false
  },
  {
    id: 2,
    content: "Todo item 2",
    status: true
  }
];

const reducer = (items, action) => {
  if (action.type == "COMPLETE") {
    return items.map(item => {
      if (item.id == action.id) {
        return {
          ...item,
          status: !item.status
        }
      }
      else {
        return item;
      }
    })
  }
  else {
    return items;
  }
}
function App() {
  const [items, dispatch] = useReducer(reducer, initialBoxList);
  const handleChecked = item => {
    dispatch({
      type: "COMPLETE",
      id: item.id
    })
  }
  return (
   <div>
      <h2
        style={{
          fontWeight: "bold",
          color: "red",
          textAlign: "center"
        }}
      >
        This project for testing useReducer hook by using checkbox problem
      </h2>
      <ul
        style={{listStyleType: "none"}}
      >
          {items.map(item => (
            <li key={item.id}>
              <input 
                type="checkbox"
                checked={item.status}
                onChange ={() => handleChecked(item)} 
              />
              {item.content}
            </li>
          ))}
      </ul>
   </div>
  );
}

export default App;
