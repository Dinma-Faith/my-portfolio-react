import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
