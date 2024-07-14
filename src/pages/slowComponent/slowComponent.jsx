import { useState } from "react";

const BigSizeComponent = () => {
    const words = Array.from({ length: 50000 });
    return (
        <ul>
            {words.map((word, i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
    );
};

const SlowComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Slow counter</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Increase: {count}
            </button>
            <BigSizeComponent />
        </div>
    );
};
export default SlowComponent;
