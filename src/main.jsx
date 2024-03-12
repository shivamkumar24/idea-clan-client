import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Usercontext from "./Context/Usercontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Usercontext>
        <App />
      </Usercontext>
    </ChakraProvider>
  </BrowserRouter>
);
