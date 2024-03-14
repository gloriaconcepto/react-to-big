import React from 'react';

const Chart = ({action}) => {
 
    const [items, setItems] = React.useState([])


    const addItem = (todo) => {
      setItems([...items, todo]);
      action(items)
    }
    return (<>
  
        <div>
          <button onClick={() => addItem('clothes')} style={{ width: '100%', marginTop: '20px' }}>
            Add Chart
          </button>
        </div>
        <ul>
          {
            items?.map((val, key) => (
              <li key={key}>
                {val}
              </li>
            ))
          }
        </ul>
    </>)
}
export default Chart