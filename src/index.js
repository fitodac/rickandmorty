import React from 'react'
import ReactDOM from 'react-dom'
import  { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router/router-config'

ReactDOM.render(
	<RouterProvider router={router} />,
  document.getElementById("root")
);
