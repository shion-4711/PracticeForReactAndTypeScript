import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
        fontFamily: "Noto Sans JP"
      }
    }
  },
  fonts: {
    heading: "Noto Sans JP",
    body: "Noto Sans JP"
  }
});

export default theme;
