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
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, { toggle: togglePwd }] = useBoolean(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // 👉 Replace this with your real validation / API call
    if (password !== "admin123") {
      setError("wrong password");
    } else {
      setError("");
      alert("Login success ✅");
    }
  };

  return (
    <Flex minH="calc(100vh - 56px)" w="full" bg="gray.50">
      <Center w="full" px={{ base: 4, md: 8 }}>
        <Box
          bg="white"
          w="full"
          maxW="sm"
          p={{ base: 6, md: 8 }}
          rounded="lg"
          shadow="md"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <VStack spacing={5} align="stretch">
            <Heading size="lg" textAlign="center">
              Login
            </Heading>

            {/* Username */}
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Select
                placeholder="Select"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              >
                <option value="user1">SM(sophiawil)</option>
                <option value="user2">User 2</option>
              </Select>
            </FormControl>

            {/* Password */}
            <FormControl isInvalid={!!error}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IoMdKey />
                </InputLeftElement>
                <Input
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={showPwd ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onClick={togglePwd}
                    icon={showPwd ? <ViewOffIcon /> : <ViewIcon />}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>

            {/* Reset link */}
            <Flex justify="flex-end">
              <Link
                as={RouterLink}
                to="/reset-password"
                color="blue.500"
                fontSize="sm"
              >
                Reset Password ?
              </Link>
            </Flex>

            {/* Submit */}
            <Button
              bg="black"
              color="white"
              size="lg"
              w="full"
              borderRadius="full" // fully rounded corners
              _hover={{ bg: "gray.800" }}
              onClick={handleSubmit}
              isDisabled={!username || !password}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
}
