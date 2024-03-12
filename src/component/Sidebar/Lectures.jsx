import { GrAnnounce } from "react-icons/gr";
import { Box, Flex, Text } from "@chakra-ui/react";

const Lectures = () => {
  const courseContent = [
    {
      title: "Introduction to Programming",
      lecturer: "John Doe",
      date: "2024-03-12",
      date: "3/03/2023",
    },
    {
      title: "Web Development Basics",
      lecturer: "Jane Smith",
      date: "2024-03-20",
      date: "3/03/2023",
    },
    {
      title: "Data Structures and Algorithms",
      lecturer: "Robert Johnson",
      date: "2024-04-05",
      date: "3/03/2023",
    },
    {
      title: "Machine Learning Fundamentals",
      lecturer: "Emily White",
      date: "2024-04-15",
      date: "3/03/2023",
    },
    {
      title: "Mobile App Development",
      lecturer: "Chris Brown",
      date: "2024-05-01",
      date: "3/03/2023",
    },
    {
      title: "Network Security",
      lecturer: "Alex Turner",
      date: "2024-05-10",
      date: "3/03/2023",
    },
    {
      title: "Database Design and Management",
      lecturer: "Samantha Green",
      date: "2024-05-25",
      date: "3/03/2023",
    },
    {
      title: "Digital Marketing Strategies",
      lecturer: "Daniel Miller",
      date: "2024-06-05",
      date: "3/03/2023",
    },
    {
      title: "Graphic Design Principles",
      lecturer: "Olivia Martinez",
      date: "2024-06-15",
      date: "3/03/2023",
    },
    {
      title: "Artificial Intelligence Applications",
      lecturer: "Michael Turner",
      date: "2024-06-28",
    },
  ];

  return (
    <Box bgColor={"#E2E8F0"} p="20px">
      {courseContent.map((e, i) => (
        <Flex
          key={i + 1}
          py="10px"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex gap="10px" w="350px" alignItems={"center"}>
            <GrAnnounce />
            <Text fontSize={"18px"} fontWeight={"md"}>
              {e.title}
            </Text>
          </Flex>

          <Text fontSize={"18px"}>{e.lecturer}</Text>
          <Text fontSize={"18px"}>{e.date}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Lectures;
