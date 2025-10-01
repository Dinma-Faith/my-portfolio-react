import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.95 },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/skills", element: <Skills /> },
          { path: "/projects", element: <Projects /> },
          { path: "/contact", element: <Contact /> },
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                className="page-wrapper"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                {element}
              </motion.div>
            }
          />
        ))}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
