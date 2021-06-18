import { Suspense } from "react"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Center, Button, ButtonGroup } from "@chakra-ui/react"
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <ButtonGroup spacing="6" marginTop="4">
          <Link href={Routes.SignupPage()}>
            <Button bg="primary" size="sm">
              <strong>Sign Up</strong>
            </Button>
          </Link>
          <Link href={Routes.LoginPage()}>
            <Button bg="secondary" size="sm">
              <strong>Login</strong>
            </Button>
          </Link>
        </ButtonGroup>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <main>
      <Center>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </Center>
    </main>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
