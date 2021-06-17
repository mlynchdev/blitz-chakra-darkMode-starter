import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import { Center, Box } from "@chakra-ui/layout"
const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Box my="6">
      <Center>
        <SignupForm onSuccess={() => router.push(Routes.Home())} />
      </Center>
    </Box>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
