import {useAtomValue} from 'jotai'

import BrewInfo from './BrewInfo'
import V60Form from './V60Form'
import {isStartedAtom} from './store'

const Index = () => {
  const isStarted = useAtomValue(isStartedAtom)

  if (isStarted) {
    return <BrewInfo/>
  }

  return <V60Form/>
}

export default Index
