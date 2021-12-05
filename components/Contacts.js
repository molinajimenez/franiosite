import Image from "next/image"
import {Link, SimpleGrid } from "@chakra-ui/layout"
import styles from '../styles/Home.module.css'
const Contacts = () => {

    return (
        <div className={styles.center}>
            <SimpleGrid columns={3} spacing={10} mt="1.5rem">
                <Link href="https://www.linkedin.com/in/molinajimenez/" isExternal={true}>
                <Image src="/linkedin.svg" width="70px" height="70px" alt="LinkedInContact" />
                </Link>
                <Link href="https://github.com/molinajimenez" isExternal={true}>
                <Image src="/github.svg" width="70px" height="70px" alt="GithubContact" />
                </Link>
                <Link href="mailto:molinajimenez01@gmail.com" isExternal={true}>
                <Image src="/mail.svg" width="70px" height="70px" alt="MailContact" />
                </Link>
            </SimpleGrid>
        </div>
    )
}

export default Contacts;