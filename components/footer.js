import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Raiyan Yahya. inspired by Takuya Matsuyama&apos;s profile.
    </Box>
  )
}

export default Footer
