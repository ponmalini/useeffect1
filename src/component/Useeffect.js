import React,{ useState, useEffect} from 'react'
import './Useeffect.css'
function MyComponent() {
    const [count,setCount] = useState(0);
    useEffect(() => {
        alert ('Component has been updated');
    },[count]);

    return (
    <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}

export default MyComponent;