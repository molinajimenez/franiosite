import { Heading, Text } from '@chakra-ui/layout';
import Image from 'next/image';
const Intro = () => {
    const intro = "Hello! I'm Francisco, a computer scientist who enjoys learning new things!";
    return (
        <>


            <Image src="/cv_picture.PNG" width="280px" height="300px" alt="a picture of Francisco Molina" />

            <Heading as="h1" justifyContent="center" mt='1.5rem' fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }} letterSpacing={"tighter"} >
                Francisco Molina
            </Heading>
            <Text pt="0.3rem" color="gray" as="h3" fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}>Computer Scientist</Text>
            <Text pt="0.3rem" color="gray" as="h3" fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}>Personal website</Text>
            <Text pt="1.3rem" color="black" as="h3" fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}>Hola 🇬🇹, Hello 🇺🇸, Hallo 🇩🇪, Cześć 🇵🇱, Zdravo! 🇷🇸</Text>
            <Text pt="1.3rem" color="black" as="h3" fontSize={{ base: "xl", md: "xl", lg: "3xl" }}>{intro}</Text>

        </>
    )
}

export default Intro;