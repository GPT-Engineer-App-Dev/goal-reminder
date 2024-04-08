import { useState } from "react";
import { Box, Button, Input, HStack, VStack, StackDivider, Spacer, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Nav from "../components/Nav";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <VStack>
      <Nav />
      <Box p={8}>
        <form onSubmit={handleSubmit}>
          <HStack>
            <Input variant="filled" placeholder="Add a todo item" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <Button colorScheme="green" type="submit" px={8}>
              <FaPlus />
            </Button>
          </HStack>
        </form>
        <VStack divider={<StackDivider />} borderColor="gray.100" borderWidth={2} p={4} borderRadius={8} w="100%" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }} alignItems="stretch" mt={8}>
          {todos.map((todo, index) => (
            <HStack key={index}>
              <Text>{todo}</Text>
              <Spacer />
            </HStack>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
