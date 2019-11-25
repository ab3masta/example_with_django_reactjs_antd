import React from 'react';
import './App.css';
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import "./static/css/carousel.css";
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomLayout from './pages/layout1';

function App() {
  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
}

export default App;
