import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import {useEffect, useRef, useState} from 'react'
import {useAtom} from 'jotai'
import {durationAtom} from './store'
import {Heading, majorScale, minorScale} from 'evergreen-ui'

dayjs.extend(duration)

const CountUpTimer = () => {
  const [duration, setDuration] = useAtom(durationAtom)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDuration(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return (
    <Heading
      size={800}
      letterSpacing={minorScale(1)}
      marginBottom={majorScale(2)}
    >
      {dayjs.duration(duration * 1000).format('mm:ss')}
    </Heading>
  )
}

export default CountUpTimer
