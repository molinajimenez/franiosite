import { Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure

} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useEffect } from 'react'
export default function Blog() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(()=>{
    onOpen()
  },[onOpen])

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog: UNDER CONSTRUCTION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main className={styles.main}>
        <Heading as="h1" justifyContent="center" mt='1.5rem' fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }} letterSpacing={"tighter"} >
          Under construction!
        </Heading>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Under construction 🏗️ </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              This is still under construction, come back later to see my blog! :)
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </main>
      <footer className={styles.footer}>
        <p>Made with ❤ using NextJS</p>
      </footer>
    </div>
  )
}
