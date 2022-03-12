import {Button, PlayIcon} from 'evergreen-ui'
import {useUpdateAtom} from 'jotai/utils'
import {isStartedAtom} from './store'

const StartButton = () => {
  const setIsStarted = useUpdateAtom(isStartedAtom)

  const handleClick = () => {
    setIsStarted(true)
  }

  return (
    <Button
      appearance="primary"
      iconBefore={PlayIcon}
      onClick={handleClick}
    >
      开始冲煮
    </Button>
  )
}

export default StartButton
