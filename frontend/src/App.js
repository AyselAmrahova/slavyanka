import './_App.scss';
import { ROUTES } from './routes/routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;