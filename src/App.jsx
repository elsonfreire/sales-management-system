import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateSalePage from "./components/CreateSalePage";
import ListSalesPage from "./components/ListSalesPage";
import ListRequestPage from "./components/ListRequestsPage";
import Header from "./components/common/Header";
import "./index.css";

const App = () => {
  const contentStyle = {
    marginLeft: "30px",
  };

  return (
    <Router>
      <Header />
      <main style={contentStyle}>
        <Routes>
          <Route path="/" element={<CreateSalePage />} />
          <Route path="/create" element={<CreateSalePage />} />
          <Route path="/sales" element={<ListSalesPage />} />
          <Route path="/requests" element={<ListRequestPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
