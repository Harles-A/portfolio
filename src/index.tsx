import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './index.module.scss'
import Navbar from './components/navbar/navbar';
import GithubProjects from './components/githubprojects/githubProjects';
import AboutMe from './components/aboutme/aboutMe';
import Cv from './components/cv/cv';
import Homepage from './components/homepage/homepage';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/github' element={<GithubProjects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
