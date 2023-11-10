import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from './QuestUiKitLightTheme';
import TeamPage from './components/TeamPage';
import Template from './components/template';
import HomePage from './components/HomePage';
import {names, email,summary, image, role} from './constants/about_page_constants';
import ResultPage from './components/ResultPage';
import {Provider} from "react-redux";
import store from "./store/store.js";
import { Helmet } from 'react-helmet';
import WebFont from 'webfontloader';
import BecomeTutor from './components/BecomeTutor';
import { Dashboard } from './components/Dashboard.jsx';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
   }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>CSC 648 Fall 2023 Team 01</title>
      </Helmet>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={questTheme}>
            <Routes>
              <Route path="/" element={<HomePage className = " Home " />} />
              <Route path="/teamPage" element={<TeamPage className = " Team " />} />
              <Route path="/resultPage" element={<ResultPage className = "result"/>} />
              <Route path="/dashboard" element={<Dashboard className="dashboard" />} />
              <Route path="/BecomeTutor" element={<BecomeTutor className="become-tutor" />} />

              <Route path="/about-Mahdi Hassanpour" element={<Template names = {names[4]} summary = {summary[4]} email = {email[4]} role = {role[4]} image={image[4]} />} />
              <Route path="/about-David Chen" element={<Template names = {names[1]} summary = {summary[1]} email = {email[1]} role = {role[1]} image={image[1]} />} />
              <Route path="/about-John Kongtcheu" element={<Template names = {names[2]} summary = {summary[2]} email = {email[2]} role = {role[2]} image={image[2]} />} />
              <Route path="/about-Aria Samandi" element={<Template names = {names[0]} summary = {summary[0]} email = {email[0]} role = {role[0]} image={image[0]} />} />
              <Route path="/about-Leo Powers" element={<Template names = {names[3]} summary = {summary[3]} email = {email[3]} role = {role[3]} image={image[3]} />} />
              <Route path="/about-Yuiel A Gebredngl" element={<Template names = {names[5]} summary = {summary[5]} email = {email[5]} role = {role[5]} image={image[5]} />} />
            </Routes>
          </ThemeProvider>
        </Provider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
