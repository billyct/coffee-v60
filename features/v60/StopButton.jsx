import {Button, StopIcon} from 'evergreen-ui'
import {useResetAtom, useUpdateAtom} from 'jotai/utils'
import {durationAtom, isStartedAtom} from './store'

const StopButton = () => {
  const setIsStarted = useUpdateAtom(isStartedAtom)
  const resetDuration = useResetAtom(durationAtom)

  const handleClick = () => {
    setIsStarted(false)
    resetDuration()
  }

  return (
    <Button
      onClick={handleClick}
      iconBefore={StopIcon}
      appearance='minimal'
    >
      停止
    </Button>
  )
}

export default StopButton
