import { useState } from "react";
import {
  Button,
  Input,
  VStack,
  useToast,
  FormLabel,
  InputGroup,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { backendUrl } from "../Pages/Home";

const signupData = {
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [signupdata, setSignupdata] = useState(signupData);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    setShow((pre) => !pre);
  };
  const getdata = (e) => {
    setSignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    setLoading(true);
    if (
      !signupdata.username ||
      !signupdata.email ||
      !signupdata.password ||
      !signupdata.confirmpassword
    ) {
      toast({
        title: "Please Provide All the Details",
        position: "top-right",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    if (!isValidEmail(signupdata.email)) {
      toast({
        title: "Invalid Email Format",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
      return;
    }

    if (signupdata.password !== signupdata.confirmpassword) {
      setLoading(false);
      toast({
        title: "Password does not match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      //  console.log(signupdata, "signup");
      const { data } = await axios.post(
        `${backendUrl}/user/signup`,
        signupdata,
        config
      );
      toast({
        title: "Registration Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: "Error Occured!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing={"5PX"}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          name="username"
          placeholder="Enter your name"
          onChange={(e) => getdata(e)}
        ></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          placeholder="Enter your email"
          onChange={(e) => getdata(e)}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            name="password"
            onChange={(e) => getdata(e)}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h="1.7rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel> Confirm Password</FormLabel>
        <InputGroup>
          <Input
            onChange={(e) => getdata(e)}
            name="confirmpassword"
            type={show ? "text" : "password"}
            placeholder="Confirm your password"
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h="1.7rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        mt={15}
        color="blue"
        width="100%"
        fontWeight={"bold"}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
