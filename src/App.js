import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage";
import LandingPage1 from "./Pages/LandingPage1";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="1" element={<LandingPage1 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
