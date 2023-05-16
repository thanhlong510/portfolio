import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/projects/hydro-power-plant-2.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hydro-power-plant" title="Hydro-power plant" thumbnail={thumbInkdrop}>
            Displaying the level water of sensors and warnings for hydro-power plant. 
          </WorkGridItem>
        </Section>       
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
