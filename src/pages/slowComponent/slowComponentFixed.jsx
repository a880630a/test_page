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

const ColorPicker = ({ children }) => {
    let [color, setColor] = useState("red");
    return (
        <div style={{ color }}>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            {children}
        </div>
    );
};

const SlowComponentFixed = () => {
    const [count, setCount] = useState(0);

    return (
        <ColorPicker>
            <h1>Slow counter fixed</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Increase: {count}
            </button>
            <BigSizeComponent />
        </ColorPicker>
    );
};
export default SlowComponentFixed;
