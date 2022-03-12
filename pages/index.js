import V60 from '../features/v60'
import {majorScale, Pane} from 'evergreen-ui'
import Header from '../features/components/Header'
import Container from '../features/components/Container'

export default function Home() {
  return (
    <Pane
      paddingY={majorScale(4)}
    >
      <Container>
        <Header/>
        <V60/>
      </Container>
    </Pane>
  )
}
