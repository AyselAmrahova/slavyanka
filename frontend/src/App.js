import './_App.scss';
import { ROUTES } from './routes/routes'
import { UserContextProvider } from "../src/pages/Main/context/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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