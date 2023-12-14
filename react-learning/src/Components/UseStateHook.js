import { useState } from 'react';
const UseStateHook = () => {
    const initialCount = 0;
    const [count, setCount] = useState(0)
    const [ name , setName ] = useState({firstName : '' , lastName : ''});
    const [ items , setItems ] = useState([]);
    const addItem = () =>{
        let item = { id : items.length , value : Math.floor(Math.random() * 10 ) + 1 } ;
        setItems([...items , item]);
    }
    
    return (
        <div>
            <section>
                <h2>UseState with previous value</h2>
                <div>
                    {count}
                </div>
                <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
                <button onClick={() => setCount(initialCount)}> Reset</button>
            </section>
            <hr />
            <section>
                <h2>UseState wtih Object </h2>
                <div>
                    <input type = 'text' value = {name.firstName} onChange={e => setName({...name , firstName : e.target.value})}></input>
                    <input type = 'text' value = {name.lastName} onChange={e => setName({...name , lastName : e.target.value})}></input>

                    <h3>{JSON.stringify(name)}</h3>
                </div>
            </section>
            <hr />
            <section>
                <h2>Use State with Array</h2>
                <div>
                    <h3>List</h3>
                    <button onClick={addItem}>Add Item</button>
                    <button onClick={() => setItems([])}> Clear</button>

                    <ul>
                    {
                        items.map(item =>{
                            return <li key={item.id}> {item.value}</li>
                        })
                    }
                    </ul>
                    
                </div>
                
            </section>

        </div>
    )
}

export default UseStateHook;