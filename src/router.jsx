import { createBrowserRouter } from "react-router-dom";
import App from './App';
import CreateLog from './pages/logCreation';
import Settings from './pages/settings';
import PDF from './pages/PDF';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

    },
    {
      path: '/createLog',
      element: <CreateLog />,  
    },
    {
        path: '/settings',
        element: <Settings />,
    },
        {
        path: '/pdfcreation',
        element: <PDF />,
    }
]);

export default router;