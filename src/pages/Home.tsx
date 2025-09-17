// src/pages/Home.tsx
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return React.createElement(Box, { p: 8 }, [
    React.createElement(Heading, { size: "md", key: "heading" }, "Home"),
    React.createElement(
      Text,
      { mt: 2, color: "gray.600", key: "text" },
      "This is a placeholder page."
    ),
  ]);
}
