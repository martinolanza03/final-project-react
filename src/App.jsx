import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import DefaultLayout from './layout/DefaultLayout';
import DiscoverMore from './components/DiscoverMore';

export default function App(props) {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<div className="Container"><DefaultLayout /> </div >} />
        <Route path="/videogame/:id" element={<DiscoverMore />} />

      </Routes>
    </BrowserRouter>
  );
}