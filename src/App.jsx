import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar";
import AnimatedRoutes from "./components/animated-routes";
import ThemeSwitcher from "./components/theme-switcher";
import "./styles/global.css";
import "./styles/root.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <ThemeSwitcher />
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
