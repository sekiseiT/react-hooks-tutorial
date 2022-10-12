import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const mycodeinfo = {
  name:"seki",
  age:24,
};

const mycodeContext = createContext(mycodeinfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <mycodeContext.Provider value={mycodeinfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </mycodeContext.Provider>
);

export default mycodeContext
