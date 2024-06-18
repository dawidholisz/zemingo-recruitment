import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store";
import "./styles/app.scss"
import {RouterProvider} from "react-router-dom";
import router from './routes';
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
        <Toaster/>
    </React.StrictMode>,
)
