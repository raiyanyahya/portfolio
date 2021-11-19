import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello , I&apos;m a distributed systems developer based in Sweden!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Raiyan Yahya
          </Heading>
          <p>( Developer Tools / AWS / Python )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/raiyan.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          BIO
        </Heading>
        <Paragraph>
        Passionate about building products and trying out new things. I have 9+ years of experience into IT consulting and product development working across domains such as Telecom, Supply Chain, Ecommerce, Advertising and Automotive. Experience in building, architecting, designing, and implementing distributed global cloud-based systems. Lots of production experience with AWS and a certified solution architect.
          .
        </Paragraph>
        <Heading as="h3" variant="section-title">
          WORK
        </Heading>
        <Paragraph>
        I work as a Senior Developer in the Tools & Infrastructure team at WirelessCar, Sweden. My work is primarily based on AWS and GitOps. I work on building tools and applications which help facilitate a better, smooth and robust way to build, test, release and deploy to the cloud. I build solutions which help code move to production and manage them. My work ranges from building micro services, pipelines and infrastructure in python and golang, docker containers, AWS, Jenkins, CLI tools, infrastructure as code and much more.
        </Paragraph>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          EXPERIENCE
        </Heading>
        <BioSection>
          <BioYear>2008 - 2012</BioYear>
          Bachelors&apos;s in Electronic Engineering.
        </BioSection>
        <BioSection>
          <BioYear>2012 - 2015</BioYear>
          CGI, Banaglore India.
        </BioSection>
        <BioSection>
        
        </BioSection>
        <BioSection>
          <BioYear>2016 - 2017</BioYear>
          Incture Technologies, Bangalore India.
        </BioSection>
        <BioSection>
          <BioYear>2017 - 2018</BioYear>
          SAP Labs, Bangalore India.
        </BioSection>
        <BioSection>
          <BioYear>2018 - present</BioYear>
          WirelessCar, Gothenburg Sweden.
        </BioSection>
      </Section>

      <Section delay={0.3}>
      <Box align="left" my={4}>
          <NextLink href="mailto:raiyanyahyadeveloper@gmail.com">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Reach me over email.
            </Button>
          </NextLink>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
