import { Flex, Text, Box } from "@chakra-ui/layout";
import Image from "next/image";
import styles from '../styles/Home.module.css'

const Card = (props) => {
    const renderImg = () => {
        if (props.render) {
            return <Image src={props.pathImg} width="300px" height="300px" alt="card attached picture" />
        }
        return null
    }
    return (
        <div className={styles.cardShadow}>
            <Flex color='white' maxWidth={{ base: "300px", md: "600px" }} flexDirection={{ base: 'column', md: 'row' }}>
                {renderImg()}

                <Box flex='1' mr='1.5rem'>
                    <Text ml='1.1rem' pt="1.3rem" color="black" justifyContent="center" as="h3" fontSize="4xl">{props.title}</Text>

                    <Text ml='1.1rem' color='black'>{props.txt}</Text>
                </Box>
            </Flex>
        </div>

    );
}

export default Card;