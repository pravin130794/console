import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={8}>
      <Heading size="md">Home</Heading>
      <Text mt={2} color="gray.600">
        This is a placeholder page.
      </Text>
    </Box>
  );
}
