import { useState } from "react";
import Child from "./Child.jsx";

// function Parent() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h2>Parent count: {count}</h2>
//             <Child count={count} />
//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Child onIncrease={() => setCount(count + 1)} count={count} />
        </div>
    );
}

export default Parent;