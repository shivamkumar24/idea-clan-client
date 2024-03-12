import {
  Box,
  Tab,
  Tabs,
  Text,
  TabList,
  TabPanel,
  TabPanels,
  Container,
} from "@chakra-ui/react";
import Login from "../component/Login";
import Signup from "../component/Signup";

export const backendUrl = "http://localhost:4500";

const Home = () => {
  return (
    <>
      <Box minH={"100vh"}>
        <Container maxW={"xl"} centerContent boxShadow={"md"}>
          <Box
            d="flex"
            w="100%"
            justifyContent={"center"}
            p={"3"}
            m="40px 0 15px 0"
            borderRadius={"lg"}
          >
            <Text
              fontSize={"4xl"}
              fontWeight={"lg"}
              textTransform={"uppercase"}
              textAlign={"center"}
            >
              Learning Platform
            </Text>
          </Box>
          <Box w="100%" p={"10px"} borderRadius={"lg"} borderWidth={"1px"}>
            <Tabs variant="soft-rounded">
              <TabList mb="1em">
                <Tab w="50%">Login</Tab>
                <Tab w="50%">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
