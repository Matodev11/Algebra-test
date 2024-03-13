import Layout from "./components/layout";
import Countries from "./components/Countries";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/countries" element={<Countries/>} />
          
        </Routes>
      </Layout>
    </Router>
    </>
    
  );
};

export default App;
