import { createBrowserRouter } from 'react-router-dom'
import paths from './paths'
import { AddProductPage, Homepage } from '../pages'
import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: paths.addProduct,
        element: <AddProductPage />,
      },
    ],
  },
])

export default router
