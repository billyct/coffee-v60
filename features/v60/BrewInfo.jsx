import {majorScale, Pane} from 'evergreen-ui'
import StopButton from './StopButton'
import CountUpTimer from './CountUpTimer'
import BrewTimings from './BrewTimings'

const BrewInfo = () => {
  return (
    <Pane>
      <BrewTimings/>
      <Pane
        marginTop={majorScale(2)}
        paddingTop={majorScale(2)}
        display='flex'
        justifyContent='space-between'
        borderTop
      >
        <CountUpTimer/>
        <StopButton/>
      </Pane>

    </Pane>
  )
}

export default BrewInfo
