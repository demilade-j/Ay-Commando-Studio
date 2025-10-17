import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './Components/Main Components/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeVideo from './Components/Main Components/HomeVideo.tsx'
import Masonary2Cols from './Components/Main Components/Masonary2Cols.tsx'
import Masonary3Cols from './Components/Main Components/Masonary3Cols.tsx'
import Masonary4Cols from './Components/Main Components/Masonary4Cols.tsx'
import Grid3GalleryCols from './Components/Main Components/Grid3GalleryCols.tsx'
import Grid4GalleryCols from './Components/Main Components/Grid4GalleryCols.tsx'
import Faqs from './Components/Main Components/Faqs.tsx'
import Contact from './Components/Main Components/Contact.tsx'
import ErrorPage from './Components/Main Components/ErrorPage.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: (
        <App />
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/homeVideo", element: <HomeVideo /> },
      { path: "/masonaryCols2", element: <Masonary2Cols /> },
      { path: "/masonaryCols3", element: <Masonary3Cols /> },
      { path: "/masonaryCols4", element: <Masonary4Cols /> },
      { path: "/grid3GalleryCols", element: <Grid3GalleryCols /> },
      { path: "/grid4GalleryCols", element: <Grid4GalleryCols /> },
      { path: "/FAQs", element: <Faqs /> },
      { path: "/contact", element: <Contact /> },
      // { path: "/contact", element: <Contact /> },
      // { path: "/page/Team", element: <Team /> },
    ],
  },
  {
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
