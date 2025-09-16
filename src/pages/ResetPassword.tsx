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
import { useState } from "react";
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

  // Validation rules
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
              Reset Password
            </Heading>

            {/* Username */}
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Select
                placeholder="Select"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              >
                <option value="SM(sophiawil)">SM(sophiawil)</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </Select>
            </FormControl>

            {/* New Password */}
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IoMdKey />
                </InputLeftElement>
                <Input
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter new password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setPwdFocused(true)}
                  onBlur={() => setPwdFocused(false)}
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

              {isPwdFocused && pwd.length > 0 && (
                <List spacing={1} mt={2} fontSize="sm">
                  <ListItem color={validations.lower ? "green.500" : "red.500"}>
                    <ListIcon
                      as={validations.lower ? CheckCircleIcon : WarningIcon}
                    />
                    At least one lowercase letter
                  </ListItem>
                  <ListItem color={validations.upper ? "green.500" : "red.500"}>
                    <ListIcon
                      as={validations.upper ? CheckCircleIcon : WarningIcon}
                    />
                    At least one uppercase letter
                  </ListItem>
                  <ListItem
                    color={validations.number ? "green.500" : "red.500"}
                  >
                    <ListIcon
                      as={validations.number ? CheckCircleIcon : WarningIcon}
                    />
                    At least one number
                  </ListItem>
                  <ListItem
                    color={validations.length ? "green.500" : "red.500"}
                  >
                    <ListIcon
                      as={validations.length ? CheckCircleIcon : WarningIcon}
                    />
                    Minimum 8 characters
                  </ListItem>
                </List>
              )}
            </FormControl>

            {/* Confirm Password */}
            <FormControl isInvalid={mismatch}>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IoMdKey />
                </InputLeftElement>
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onClick={toggleConfirm}
                    icon={showConfirm ? <ViewOffIcon /> : <ViewIcon />}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>Passwords do not match</FormErrorMessage>
            </FormControl>

            {/* Submit */}
            <Button
              bg="black"
              color="white"
              size="lg"
              w="full"
              borderRadius="full"
              _hover={{ bg: "gray.800" }}
              onClick={handleSubmit}
              isDisabled={!allValid}
            >
              Reset
            </Button>
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
}
