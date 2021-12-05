import Image from "next/image"
import {SimpleGrid } from "@chakra-ui/layout"
import styles from '../styles/Home.module.css'
const Techs = () => {

    return (
        <div className={styles.center}>
            <SimpleGrid columns={4} spacing={10} mt="1.5rem">
                <Image src="/python.svg" width="70px" height="70px" alt="Python" />
                <Image src="/javascript.svg" width="70px" height="70px" alt="Javascript" />
                <Image src="/php.svg" width="70px" height="70px" alt="PHP" />
                <Image src="/r.svg" width="70px" height="70px" alt="PHP" />
            </SimpleGrid>
        </div>
    )
}

export default Techs;