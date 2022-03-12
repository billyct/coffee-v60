import {Pane} from 'evergreen-ui'

const Container = ({children}) => {
  return (
    <Pane
      width='80%'
      maxWidth={980}
      marginX='auto'
    >
      {children}
    </Pane>
  )
}

export default Container
