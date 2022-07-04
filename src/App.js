import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import {Footer,Navbar} from './components'
import {DetailFilm,FilmPage,Home,Genres} from './pages'

function App() {


  return <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<DetailFilm/>} />
        <Route path='/movies' element={<FilmPage />} />
        <Route path='/movies/the-loai' element={<FilmPage />} />
        <Route path='/tv-show/:id' element={<DetailFilm/>} />
        <Route path='/tv-shows' element={<FilmPage/>} />
        <Route path='/tv-shows/the-loai' element={<FilmPage />} />
        <Route path='/comming-up' element={<FilmPage />} />
        <Route path='/trending' element={<FilmPage />} />
        <Route path='/the-loai' element={<Genres />} />
      </Routes>
      <Footer />
    </Router>
  </>
}

export default App;
