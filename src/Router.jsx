import { createBrowserRouter } from "react-router-dom";

// Routes
import App from "../src/App";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import Coverage from "./Routes/Coverage";
import Services from "./Routes/Services";
import Faqs from "./Routes/Faqs";
import Contact from "./Routes/Contact";
import ErrorPage from "./Routes/ErrorPage";
import BudgetRequest from "./Routes/BudgetRequest";

const Router = createBrowserRouter([
  // Root
  {
    path: "/",
    element: <App />,
    children: [
      // Home
      {
        path: "/inicio",
        element: <Home />,
      },
      // AboutUs
      {
        path: "/sobre-nosotros",
        element: <AboutUs />,
      },
      // Coverage
      {
        path: "/cobertura",
        element: <Coverage />,
      },
      // Services
      {
        path: "/servicios",
        element: <Services />,
      },
      // Faqs
      {
        path: "/faqs",
        element: <Faqs />,
      },
      // Contact
      {
        path: "/contacto",
        element: <Contact />,
      },
      // Budget Request
      {
        path: "/Presupuesto",
        element: <BudgetRequest />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Router;
