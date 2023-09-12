import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./components/App/App"
import {HashRouter} from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
