// src/pages/Login.tsx
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Select,
  VStack,
  useBoolean,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoMdKey } from "react-icons/io";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, { toggle: togglePwd }] = useBoolean(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password !== "admin123") {
      setError("wrong password");
    } else {
      setError("");
      alert("Login success ✅");
    }
  };

  return React.createElement(
    Flex,
    { minH: "calc(100vh - 56px)", w: "full", bg: "gray.50" },
    React.createElement(
      Center,
      { w: "full", px: { base: 4, md: 8 } },
      React.createElement(
        Box,
        {
          bg: "white",
          w: "full",
          maxW: "sm",
          p: { base: 6, md: 8 },
          rounded: "lg",
          shadow: "md",
          borderWidth: "1px",
          borderColor: "gray.200",
        },
        React.createElement(VStack, { spacing: 5, align: "stretch" }, [
          React.createElement(
            Heading,
            { size: "lg", textAlign: "center", key: "heading" },
            "Login"
          ),

          // Username
          React.createElement(
            FormControl,
            { key: "username-control" },
            React.createElement(FormLabel, null, "Username"),
            React.createElement(
              Select,
              {
                placeholder: "Select",
                value: username,
                onChange: (e: any) => setUsername(e.target.value),
              },
              [
                React.createElement(
                  "option",
                  { value: "user1", key: "user1" },
                  "SM(sophiawil)"
                ),
                React.createElement(
                  "option",
                  { value: "user2", key: "user2" },
                  "User 2"
                ),
              ]
            )
          ),

          // Password
          React.createElement(
            FormControl,
            { isInvalid: !!error, key: "password-control" },
            React.createElement(FormLabel, null, "Password"),
            React.createElement(
              InputGroup,
              null,
              React.createElement(
                InputLeftElement,
                null,
                React.createElement(IoMdKey)
              ),
              React.createElement(Input, {
                type: showPwd ? "text" : "password",
                placeholder: "Enter password",
                value: password,
                onChange: (e: any) => setPassword(e.target.value),
              }),
              React.createElement(
                InputRightElement,
                null,
                React.createElement(IconButton, {
                  "aria-label": showPwd ? "Hide password" : "Show password",
                  size: "sm",
                  variant: "ghost",
                  onClick: togglePwd,
                  icon: showPwd
                    ? React.createElement(ViewOffIcon)
                    : React.createElement(ViewIcon),
                })
              )
            ),
            React.createElement(FormErrorMessage, null, error)
          ),

          // Reset link
          React.createElement(
            Flex,
            { justify: "flex-end", key: "reset-link" },
            React.createElement(
              Link,
              {
                as: RouterLink,
                to: "/reset-password",
                color: "blue.500",
                fontSize: "sm",
              },
              "Reset Password ?"
            )
          ),

          // Submit
          React.createElement(
            Button,
            {
              key: "submit-button",
              bg: "black",
              color: "white",
              size: "lg",
              w: "full",
              borderRadius: "full",
              _hover: { bg: "gray.800" },
              onClick: handleSubmit,
              isDisabled: !username || !password,
            },
            "Submit"
          ),
        ])
      )
    )
  );
}
