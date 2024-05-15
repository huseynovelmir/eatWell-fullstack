import Header from "./layout/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./layout/footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
