import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(ChakraProvider, null, [
      React.createElement(ColorModeScript, {
        initialColorMode: "light",
        key: "color-mode",
      }),
      React.createElement(
        BrowserRouter,
        { key: "router" },
        React.createElement(App, null)
      ),
    ])
  )
);
