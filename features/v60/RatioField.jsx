import {FormField, majorScale, Pane, Text, TextInput} from 'evergreen-ui'
import {useAtom} from 'jotai'
import {waterRatioAtom} from './store'
import InputHelperText from './InputHelperText'

const RatioField = () => {
  const [waterRatio, setWaterRatio] = useAtom(waterRatioAtom)

  const handleChange = (e) => {
    setWaterRatio(e.target.value)
  }

  return (
    <FormField
      label='比例'
      description='水和咖啡豆的比例'
      marginBottom={majorScale(2)}
    >
      <Pane
        position='relative'
      >
        <TextInput
          paddingRight={majorScale(18)}
          width='100%'
          value={waterRatio}
          onChange={handleChange}
        />

        <InputHelperText>水 : 1 咖啡豆</InputHelperText>
      </Pane>
    </FormField>
  )
}

export default RatioField
