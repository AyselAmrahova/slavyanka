import './_App.scss';
import { ROUTES } from './routes/routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserContextProvider } from "../src/pages/Main/context/UserContext";

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
}

export default App;