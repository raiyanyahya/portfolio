import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Raiyan Yahya. inspired by Takuya Matsuyama&apos;s <Link href="https://www.craftz.dog/" passHref={true}> profile </Link>
    </Box>
  )
}

export default Footer
