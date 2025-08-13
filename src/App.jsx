import Sidebar from "./components/sidebar/sidebar";
import { About } from "./components/about";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        {/* <Header /> */}
        <About />
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
