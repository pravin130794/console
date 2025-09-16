import { Flex, Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="black"
      color="white"
      px={6}
      py={3}
      align="center"
      boxShadow="md"
    >
      <Box
        as="span"
        bg="red.500"
        fontWeight="bold"
        fontSize="xl"
        px={2}
        borderRadius="md"
        mr={2}
      >
        V
      </Box>
      <Text fontWeight="bold" fontSize="lg">
        ATOLL
      </Text>
    </Flex>
  );
}
