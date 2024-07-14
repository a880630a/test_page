import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SlowComponent from "./pages/slowComponent/slowComponent";
import SlowComponentButton from "./pages/slowComponent/slowComponentButton";
import SlowComponentFixed from "./pages/slowComponent/slowComponentFixed";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/slow-component" element={<SlowComponent />} />
                    <Route
                        path="/slow-component-button-isolate"
                        element={<SlowComponentButton />}
                    />
                    <Route
                        path="/slow-component-fixed"
                        element={<SlowComponentFixed />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
