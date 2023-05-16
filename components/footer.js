import {
  Link,
  Box,
  Button,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nguyen Thanh Long. All Rights Reserved. Credit to &nbsp;
      <Link href="https://www.craftz.dog" target="_blank">

        Takuya Matsuyama
 
    </Link>
    </Box>
  )
}

export default Footer
