import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Profile from "../component/Sidebar/Profile";
import Settings from "../component/Sidebar/Settings";
import Lectures from "../component/Sidebar/Lectures";

const Dashboard = () => {
  const [currentContent, setCurrentContent] = useState("Lecture");

  const changeContent = (name) => {
    switch (name) {
      case "Profile":
        setCurrentContent(<Profile />);
        break;
      case "Settings":
        setCurrentContent(<Settings />);
        break;
      case "Lecture":
        setCurrentContent(<Lectures />);
        break;
      default:
        setCurrentContent(null); // Default content or handle other cases
        break;
    }
  };

  return (
    <Box border="1px solid black">
      <Flex>
        <Text py="20px">Navbar</Text>
      </Flex>
      <Flex>
        <Flex
          flexDir={"column"}
          gap="15px"
          width="250px"
          bgColor={"#171923"}
          padding="20px"
          color="white"
          boxSizing="border-box"
        >
          <Text
            cursor="pointer"
            borderBottom={"1px solid black"}
            fontStyle={"md"}
            fontSize={"20px"}
            onClick={() => changeContent("Lecture")}
          >
            Lectures
          </Text>
          <Text
            cursor="pointer"
            borderBottom={"1px solid black"}
            fontSize={"20px"}
            onClick={() => changeContent("Profile")}
          >
            Profile
          </Text>
          <Text
            cursor="pointer"
            borderBottom={"1px solid black"}
            fontSize={"20px"}
            onClick={() => changeContent("Settings")}
          >
            Settings
          </Text>
        </Flex>
        <Box flex="1" boxSizing="border-box">
          {currentContent}
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
