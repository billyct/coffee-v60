import {useAtomValue} from 'jotai'
import {Heading, majorScale, Pane, Pulsar, Small, Position} from 'evergreen-ui'

import {coffeeBeanNumberAtom, durationAtom, waterNumberAtom} from './store'

const isBetween = (duration, min, max = null) => {
  let res = duration >= min

  if (max) {
    res = res && (duration < max)
  }

  return res
}

const BrewTimings = () => {
  const duration = useAtomValue(durationAtom)
  const coffeeBean = useAtomValue(coffeeBeanNumberAtom)
  const water = useAtomValue(waterNumberAtom)

  const timings = [
    {
      minTime: 0,
      maxTime: 30,
      title: '闷蒸',
      weight: water * 0.2 + coffeeBean,
    },
    {
      minTime: 30,
      maxTime: 60,
      title: '一段',
      weight: water * 0.6 + coffeeBean
    },
    {
      minTime: 60,
      maxTime: 90,
      title: '二段',
      weight: water * 0.8 + coffeeBean
    },
    {
      minTime: 90,
      title: '三段',
      weight: water + coffeeBean
    }
  ]

  return (
    <Pane>
      {timings.map(timing => (
        <Pane
          key={timing.title}
          borderRadius={4}
          marginY={majorScale(4)}
          position='relative'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading
            size={100}
          >
            {timing.title}

            {timing.maxTime && (
              <Small
                marginLeft={majorScale(1)}
              >
                {timing.maxTime - timing.minTime} 秒
              </Small>
            )}
          </Heading>
          <Heading>
            加水至 {timing.weight.toFixed(2)} g
          </Heading>

          {isBetween(duration, timing.minTime, timing.maxTime) && (
            <Pulsar
              position={Position.TOP_RIGHT}
              size={majorScale(2)}
            />
          )}
        </Pane>
      ))}
    </Pane>
  )
}

export default BrewTimings
