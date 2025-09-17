// src/pages/ResetPassword.tsx
import React, { useState } from "react";
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
  Select,
  VStack,
  useBoolean,
  useToast,
  List,
  ListItem,
  ListIcon,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoMdKey } from "react-icons/io";
import {
  ViewIcon,
  ViewOffIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";

export default function ResetPassword() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [isPwdFocused, setPwdFocused] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [showPwd, { toggle: togglePwd }] = useBoolean(false);
  const [showConfirm, { toggle: toggleConfirm }] = useBoolean(false);
  const toast = useToast();

  const validations = {
    lower: /[a-z]/.test(pwd),
    upper: /[A-Z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    length: pwd.length >= 8,
  };

  const mismatch = confirm.length > 0 && confirm !== pwd;
  const allValid =
    Object.values(validations).every(Boolean) && !mismatch && pwd && confirm;

  const handleSubmit = () => {
    toast({
      title: "Password updated",
      description: `Password reset successful for ${username}.`,
      status: "success",
      duration: 2000,
    });
    setPwd("");
    setConfirm("");
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
          // Title
          React.createElement(
            Heading,
            { size: "lg", textAlign: "center", key: "title" },
            "Reset Password"
          ),

          // Username
          React.createElement(
            FormControl,
            { key: "username-ctl" },
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
                  { value: "SM(sophiawil)", key: "opt1" },
                  "SM(sophiawil)"
                ),
                React.createElement(
                  "option",
                  { value: "user2", key: "opt2" },
                  "User 2"
                ),
                React.createElement(
                  "option",
                  { value: "user3", key: "opt3" },
                  "User 3"
                ),
              ]
            )
          ),

          // New Password
          React.createElement(
            FormControl,
            { key: "pwd-ctl" },
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
                placeholder: "Enter new password",
                value: pwd,
                onChange: (e: any) => setPwd(e.target.value),
                onFocus: () => setPwdFocused(true),
                onBlur: () => setPwdFocused(false),
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
            // Validation checklist (only while typing)
            isPwdFocused && pwd.length > 0
              ? React.createElement(
                  List,
                  { spacing: 1, mt: 2, fontSize: "sm" },
                  [
                    React.createElement(
                      ListItem,
                      {
                        color: validations.lower ? "green.500" : "red.500",
                        key: "rule-lower",
                      },
                      React.createElement(ListIcon, {
                        as: validations.lower ? CheckCircleIcon : WarningIcon,
                      }),
                      "At least one lowercase letter"
                    ),
                    React.createElement(
                      ListItem,
                      {
                        color: validations.upper ? "green.500" : "red.500",
                        key: "rule-upper",
                      },
                      React.createElement(ListIcon, {
                        as: validations.upper ? CheckCircleIcon : WarningIcon,
                      }),
                      "At least one uppercase letter"
                    ),
                    React.createElement(
                      ListItem,
                      {
                        color: validations.number ? "green.500" : "red.500",
                        key: "rule-number",
                      },
                      React.createElement(ListIcon, {
                        as: validations.number ? CheckCircleIcon : WarningIcon,
                      }),
                      "At least one number"
                    ),
                    React.createElement(
                      ListItem,
                      {
                        color: validations.length ? "green.500" : "red.500",
                        key: "rule-length",
                      },
                      React.createElement(ListIcon, {
                        as: validations.length ? CheckCircleIcon : WarningIcon,
                      }),
                      "Minimum 8 characters"
                    ),
                  ]
                )
              : null
          ),

          // Confirm Password
          React.createElement(
            FormControl,
            { isInvalid: mismatch, key: "confirm-ctl" },
            React.createElement(FormLabel, null, "Confirm Password"),
            React.createElement(
              InputGroup,
              null,
              React.createElement(
                InputLeftElement,
                null,
                React.createElement(IoMdKey)
              ),
              React.createElement(Input, {
                type: showConfirm ? "text" : "password",
                placeholder: "Confirm new password",
                value: confirm,
                onChange: (e: any) => setConfirm(e.target.value),
              }),
              React.createElement(
                InputRightElement,
                null,
                React.createElement(IconButton, {
                  "aria-label": showConfirm ? "Hide password" : "Show password",
                  size: "sm",
                  variant: "ghost",
                  onClick: toggleConfirm,
                  icon: showConfirm
                    ? React.createElement(ViewOffIcon)
                    : React.createElement(ViewIcon),
                })
              )
            ),
            React.createElement(
              FormErrorMessage,
              null,
              "Passwords do not match"
            )
          ),

          // Submit
          React.createElement(
            Button,
            {
              key: "submit",
              bg: "black",
              color: "white",
              size: "lg",
              w: "full",
              borderRadius: "full",
              _hover: { bg: "gray.800" },
              onClick: handleSubmit,
              isDisabled: !allValid,
            },
            "Reset"
          ),
        ])
      )
    )
  );
}
