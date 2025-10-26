// src/route.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home";
import SimplePage from "@pages/SimplePage";
import Services from "@pages/Services"; // NEW
import About from "@pages/About";
import Methology from "@pages/Methology";
import Events from "@pages/Events";
import Insights from "@pages/Insights";
import Contact from "@pages/Contact"
import ServiceStrategicAdvisory from "@pages/ServiceStrategicAdvisory";
import VentureKings from "@pages/VentureKings";
import Team from "@pages/Team"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // Services (полноценная страница с бенто-лайт)
      { path: "/services", element: <Services /> },

      // Остальные ссылки оставляем как есть
      { path: "/services/funding-compass", element: <SimplePage title="Funding Compass ™" /> },
      { path: "/services/global-forum", element: <SimplePage title="Global Forum" /> },
      { path: "/services/education", element: <SimplePage title="Education" /> },
      { path: "/services/research", element: <SimplePage title="Research" /> },
      { path: "/services/consulting", element: <SimplePage title="Consulting" /> },
      { path: "/services/speaking", element: <SimplePage title="Speaking" /> },
      { path: "/services/strategic-advisory", element: <ServiceStrategicAdvisory /> },
      { path: "/about", element: <About /> },
      { path: "/media", element: <SimplePage title="Media" /> },
      { path: "/founders-corner", element: <SimplePage title="Founder's Corner" /> },
      { path: "/methology", element: <Methology /> },
      { path: "/insights", element: <Insights /> },
      { path: "/events", element: <Events /> },
      { path: "/contact", element: <Contact /> },
      { path: "/terms", element: <SimplePage title="Terms" /> },
      { path: "/venture", element: <VentureKings />},
      { path: "/team", element: <Team />}
    ]
  }
]);