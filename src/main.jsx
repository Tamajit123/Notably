import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const MainApp = () => {
  const [isDarkMode , setIsDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Provider store={store}>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <App isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} />
        <Toaster position="top-right"/>
      </div>
    </Provider>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp/>
  </StrictMode>
);
