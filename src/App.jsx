import { useState, useEffect } from "react";
import "./App.css";
import AccessibleModal from "./Components/AccessibleModal";
import AnimatedButton from "./Components/AnimatedButton";
import Layout from "./Components/Layout";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.getElementById("modal-content")?.focus();
    }
  }, [isModalOpen]);

  const dynamicBgStyle = {
    backgroundColor: count % 2 === 0 ? "#f0f8ff" : "#fffacd",
  };

  return (
    <Layout>
      <>
        <div className="card" style={dynamicBgStyle}>
          <AnimatedButton onClick={() => setModalOpen(true)}>
            Open Modal
          </AnimatedButton>
        </div>
        <Home />
      </>
      <AccessibleModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        >
          <div id="modal-content" tabIndex="-1">
            <h2>Hello from the Modal!</h2>
            <p>This is a sample modal content.</p>
          </div>
        </AccessibleModal>
    </Layout>
  );
}

export default App;
