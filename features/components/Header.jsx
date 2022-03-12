import {Pane, Group, Button, Heading, majorScale} from 'evergreen-ui'

const Header = () => {

  return (
    <Pane
      marginBottom={majorScale(2)}
      paddingY={majorScale(1)}
      borderBottom
    >
      <Heading
        size={100}
      >
        V60
      </Heading>
    </Pane>
  )
}

export default Header
