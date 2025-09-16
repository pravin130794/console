import { Flex } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Flex>
  );
}
