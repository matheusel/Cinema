import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './routes/About'
import Home from './routes/Home'
import Movies from './routes/Movies'
import News from './routes/News'
import Top from './routes/Top'
import TvShows from './routes/TvShows'
import Error from './routes/Error'
import Admin from './routes/Admin'
import Criar from './routes/Criar'
import Deletar from './routes/Deletar'
import Buscar from './routes/Buscar'
import Atualizar from './routes/Atualizar'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "movies",
        element: <Movies />
      },
      {
        path: "news",
        element: <News />
      },
      {
        path: "top",
        element: <Top />
      },
      {
        path: "tvshows",
        element: <TvShows />
      },
      {
        path: "admin",
        element: <Admin />
      },
      {
        path: "admin/criar",
        element: <Criar />
      },
      {
        path: "admin/buscar",
        element: <Buscar />
      },
      {
        path: "admin/deletar",
        element: <Deletar />
      },
      {
        path: "admin/atualizar",
        element: <Atualizar />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
