import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMessage from "./Pages/AllMessageRsvp";

// Pages
import LandingPage from "./Pages/LandingPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/:name" element={<LandingPage />} />
                    <Route path="/messages" element={<AllMessage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
