import {
  Box,
  Text,
  Wrap,
  Button,
  VStack,
  Heading,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import { backendUrl } from "./Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setAllcourses] = useState([]);
  const { token } = JSON.parse(localStorage.getItem("userInfo"));

  const allcourses = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    try {
      const { data } = await axios.get(
        `${backendUrl}/admin/allcourses`,
        config
      );
      setAllcourses(data?.courses);
      console.log(data?.courses);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(courses, "courses");
  useEffect(() => {
    allcourses();
  }, []);

  return (
    <>
      <Box p={5} w="90%" mx="auto">
        <VStack spacing={8} align="center">
          <Heading as="h1" size="xl">
            Available Courses
          </Heading>
          <Wrap spacing={4}>
            {courses.map((course, index) => (
              <WrapItem key={index}>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  _hover={{ boxShadow: "lg", cursor: "pointer" }}
                >
                  <VStack p={5} align="start">
                    <Heading as="h2" size="md" mb={2}>
                      {course.name}
                    </Heading>
                    <Text fontSize="md" color="gray.500" mb={4}>
                      {course.description}
                    </Text>
                    <Text fontSize="md" color="blue.500">
                      Duration: {course.duration}
                    </Text>
                    <Button
                      w="full"
                      variant={"solid"}
                      colorScheme="blue"
                      onClick={() => navigate("/dashboard")}
                    >
                      Apply
                    </Button>
                  </VStack>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </Box>
    </>
  );
};

export default Courses;
