import { AnimatePresence } from "framer-motion";
import Stair from "../Components/Stair";
import { useLocation } from "react-router-dom";

export default function Stare({ children }) {
  const location = useLocation();
  
  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={location.pathname} className="pathstair">
          {children}
          <Stair />
        </div>
      </AnimatePresence>
    </div>
  );
}

// Usage in App.js or main router component:
// <Stare>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     {/* other routes */}
//   </Routes>
// </Stare>
