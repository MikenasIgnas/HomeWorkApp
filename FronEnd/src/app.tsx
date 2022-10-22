import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterForm';
import HomePage from './components/HomePage/HomePage';
import HomePageHeader from './components/HomePage/HomePageHeader';
import AllPosts from './components/AllPosts/AllPosts';
import CreatePost from './components/AllPosts/CreatePost/CreatePost';

const App: React.FC = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<RegisterPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<HomePageHeader />}>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AllPosts" element={<AllPosts />} />
        <Route path="/CreatePost" element={<CreatePost />} />
      </Route>
    </Routes>
  </BrowserRouter>

    );

export default App;
