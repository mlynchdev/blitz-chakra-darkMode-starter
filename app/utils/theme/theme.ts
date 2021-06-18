import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const myTheme = extendTheme({
  colors: {
    primary: "#845Ec2",
    secondary: "#ff6f91",
    highlight: "#00c9a7",
    warning: "#ffc75f",
    danger: "#c34a36",
    success: "#4BB543",
  },
  // Global default overrides are done below in styles.global object
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.700")(props),
        lineHeight: "base",
      },
    }),
  },
  fonts: {},
})

export default myTheme
