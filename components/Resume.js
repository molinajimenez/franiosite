
import { Center, SimpleGrid, GridItem } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"
import { Chrono } from "react-chrono";
import styles from '../styles/Home.module.css'

const Resume = () => {
    const exp = [
        {
            title: "Sept. 2021",
            cardTitle: "Data Analytics @ UVG",
            cardSubtitle: "Macroeconomic data analysis for sustainable economic growth, working mainly with R, and Excel. In charge of production forecasts",
        },
        {
            title: "Aug. 2020",
            cardTitle: "Fullstack and Sysadmin @ Bautech",
            cardSubtitle: "Responsible of server management using WHM, developing two separate applications, had experience with: Django, React Native and ExpressJs",
        },
        {
            title: "Sept. 2019",
            cardTitle: "Backend Dev. @ Deaweb-o",
            cardSubtitle: "Development and maintenance of backend module for eCommerce site using Laravel. Also responsible for QA, and managing Azure DevOps",
        },

        {
            title: "Oct. 2015",
            cardTitle: "Walmart Customer representative @ ICS",
            cardSubtitle: "Responsible for replying questions to customers regarding order complaints, FAQs, etc.",
        },


    ];

    const academy = [
        {
            title: "Jan. 2017 - Dec. 2021",
            cardTitle: "Computer Science @ UVG",
            cardSubtitle: "Bachelor's degree. Scheduled graduation for 2022, got interested in IoT, web dev, and Data Analytics.",
        },

        {
            title: "Jan. 2015 - Dec. 2016",
            cardTitle: "German courses @ Instituto von Humboldt",
            cardSubtitle: "A2 certificate for german language",
        },

        {
            title: "Jan. 2006 - Oct. 2015",
            cardTitle: "Elementary & High School @ Bilingüe el Prado",
            cardSubtitle: "Basic pre faculty studies.",
        }
    ]
    const certificates = [

        {
            title: "Oct. 2020",
            cardTitle: "Going Cloud-Native: AWS Fundamentals",
            cardSubtitle: "Course designed to teach how to use basic features of AWS and deployment of DBs, VPCs, EC2, S3.",
        },
        {
            title: "Apr. 2020",
            cardTitle: "Data Science: Visualization @ HarvardX",
            cardSubtitle: "Course designed to teach how to do proper data visualizations using R.",
        },
    ]
    const scholarships = [
        {
            title: "Feb. 2020",
            cardTitle: "Erasmus+ @ Białystok University of Technology",
            cardSubtitle: "Erasmus exchange, did a semester where I could get to know different cultures and get to know wonderful people.",
        },

        {
            title: "Dec. 2018",
            cardTitle: "Seeds for the future @ Beijing Language and Culture University",
            cardSubtitle: "Learned chinese basic language and the cultural perspective from chinese people.",
        },

        {
            title: "Dec. 2018",
            cardTitle: "Seeds for the future @ Huawei University",
            cardSubtitle: "Training in IoT, 5G, and AI.",
        }
    ]
    return (
        <div style={{ "margin": "1.5rem" }}>


            <SimpleGrid
                columns={{ "xl": 4, "base": 1 }}
                spacing={{ "xl": 2, "base": 10 }}
            >
                <GridItem className={styles.card} p="1.2rem">
                    <Center>
                        <Text pt="1.3rem" color="black" justifyContent="center" as="h3" fontSize="5xl">Experience</Text>
                    </Center>
                    <Text pt="1.3rem" color="black" as="h3" fontSize="xl">My job positions summarized, specialized in software development.</Text>
                    <br />
                    <Center>
                        <div style={{ width: "100%", height: "300px" }}>
                            <Chrono items={exp} mode="VERTICAL" />
                        </div>
                    </Center>
                </GridItem>
                <GridItem className={styles.card} p='1.2rem'>
                    <Center>
                        <Text pt="1.3rem" color="black" justifyContent="center" as="h3" fontSize="5xl">Education</Text>
                    </Center>
                    <Text pt="1.3rem" color="black" as="h3" fontSize="xl">Different institutes and faculties where I achieved a diploma/degree.</Text>
                    <br />
                    <div style={{ width: "100%", height: "300px" }}>
                        <Chrono items={academy} mode="VERTICAL" />
                    </div>

                </GridItem>
                <GridItem className={styles.card} p='1.2rem'>
                    <Center>
                        <Text pt="1.3rem" color="black" justifyContent="center" as="h3" fontSize="5xl">Certificates</Text>
                    </Center>
                    <Text pt="1.3rem" color="black" as="h3" fontSize="xl">Obtained certificates related to programming throughout my career.</Text>
                    <br />
                    <div style={{ width: "100%", height: "300px" }}>
                        <Chrono items={certificates} mode="VERTICAL" />
                    </div>
                </GridItem>
                <GridItem className={styles.card} p='1.2rem'>
                    <Center>
                        <Text pt="1.3rem" color="black" justifyContent="center" as="h3" fontSize="5xl">Scholarships</Text>
                    </Center>
                    <Text pt="1.3rem" color="black" as="h3" fontSize="xl">Different scholarships granted throughout my career.</Text>
                    <br />
                    <div style={{ width: "100%", height: "300px" }}>
                        <Chrono items={scholarships} mode="VERTICAL" />
                    </div>
                </GridItem>

            </SimpleGrid>
        </div>
    )

}

export default Resume