import React, { Suspense } from 'react';
import { createGlobalStyle } from "styled-components";

import 'react-quill/dist/quill.snow.css';
import { SnackbarProvider } from 'notistack';
import Helmet from 'react-helmet';
import { LinearProgress } from '@mui/material';
import "../src/view/Detail/scss/astro-ecommerce.scss"
import "../src/Layout/main-layout/Layout.scss"
import MainLayout from '../src/Layout/main-layout/MainLayout'


import NotFoundPage from './view/pages/NotFoundPage';
import AboutPage from './view/pages/AboutPage';
import ContactUs from './view/pages/ContactUs';
//import Enrollment from './view/courses/LoggedIn/Enrollment';


import Homepage from "./view/Homepage";



import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 2;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

function App() {
 

  return (
    <>
      <GlobalStyle />
      <SnackbarProvider dense maxSnack={3}>
      <Router>
      <Helmet
          titleTemplate="%s - Walubengo"
          defaultTitle="Walubengo"
        >
          <meta name="description" content="Walubengo application" />
        </Helmet> 
        <MainLayout>
        <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
        <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path='/not-found' element={<NotFoundPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
    
        </Routes>
        
        </Suspense>
        </MainLayout>
   
      </Router>
       
      </SnackbarProvider>
      </>
  );
}

export default App;
