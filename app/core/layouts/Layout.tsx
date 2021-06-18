import { ReactNode } from "react"
import { Head } from "blitz"
import { Flex, IconButton, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>{title || "client-tracker"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="flex-end" width="70%" m="auto">
        <IconButton
          aria-label="dark mode"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          my="4"
          mr="14"
        />
      </Flex>
      {children}
    </>
  )
}

export default Layout
