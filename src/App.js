import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import Hero_section from './components/Hero_section';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';
import AboutCourse from './components/AboutCourse';
import CourseModule from './components/CourseModule';
import TimeMangment from './components/TimeMangment';
import Footer from './components/Footer';
import Homepage from './components/HomePage'
import Login from './components/Login';
import Signup from './components/Signup';
import CoursePage from './components/CoursePage';
import VideosPage from './components/VideosPage';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
        <Routes>
          <Route path="/Home" element={<Homepage />} />
          <Route path='/' element={<TimeMangment />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Coursepage" element={<CoursePage />} />
            <Route path='/Video' element={<VideosPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
