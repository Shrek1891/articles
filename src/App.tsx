import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<Details/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
