import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Description } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hydro-power plant">
    <Container>
      <Title>
      Hydro-power plant <Badge>5/2023</Badge>
      </Title>
      <P>
      Displaying the level water of sensors and warnings for hydro-power plant. Exporting the data to excel is available
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thacba-e48h.vercel.app/">
          https://thacba-e48h.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, TailwindCSS, ExcelJs, ChartJs2</span>
        </ListItem>
      </List>
      <Description>
        Warning Page
      </Description>
      <WorkImage src="/images/projects/hydro-power-plant-1.png" />
      <Description>
        Chart Page
      </Description>
      <WorkImage src="/images/projects/hydro-power-plant-2.png" />
      <Description>
        Water Data Page
      </Description>
      <WorkImage src="/images/projects/hydro-power-plant-3.png" />
      <Description>
        Exported Excel
      </Description>
      <WorkImage src="/images/projects/hydro-power-plant-4.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
