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
const Button = () => {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((c) => c + 1)}>
            Increase: {count}
        </button>
    );
};

const SlowComponentButton = () => {
    const [color, setColor] = useState("red");
    return (
        <div>
            <div style={{ color }}>
                <h1>Slow counter button isolate</h1>
                <Button />
                <input
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <BigSizeComponent />
            </div>
        </div>
    );
};
export default SlowComponentButton;
