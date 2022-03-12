import {Heading, majorScale, Pane, Select, SelectField} from 'evergreen-ui'
import {useAtom} from 'jotai'
import range from 'lodash/range'

import {temperatureAtom} from './store'

const availableTemperatures = range(90, 100)

const TemperatureField = () => {
  const [temperature, setTemperature] = useAtom(temperatureAtom)

  const handleChange = (e) => {
    setTemperature(e.target.value)
  }

  return (
    <Pane
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      paddingY={majorScale(1)}
      borderBottom
    >
      <Heading
        size={100}
      >
        Temperature
      </Heading>

      <Select
        value={temperature}
        onChange={handleChange}
        flex='initial'
      >
        {availableTemperatures.map(value => (
          <option
            key={`availableTemperatures_${value}`}
            value={value}
          >
            {value} ℃
          </option>
        ))}
      </Select>
    </Pane>
  )
}

export default TemperatureField
