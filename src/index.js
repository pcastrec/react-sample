import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

const root = document.getElementById('root')
const app = createRoot(root)

const App = () => {

    const [name, setName] = React.useState('')

    return (
        <BrowserRouter>
        {/* L'ordre des routes est importants ! */}
            <Routes>
                {/* Public routes */}
                <Route path='login' element={<Login setName={setName} />} />
                {/* Private routes */}
                <Route path='' element={<Layout name={name} />} >
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About name={name} />} />
                </Route>
                {/* 404 route */}
                <Route path=':pages' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)