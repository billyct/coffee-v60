import {FormField, majorScale, Pane, Text, TextInput, TextInputField} from 'evergreen-ui'
import {useAtom} from 'jotai'
import {coffeeBeanAtom} from './store'
import InputHelperText from './InputHelperText'

const CoffeeBeanField = () => {
  const [coffeeBean, setCoffeeBean] = useAtom(coffeeBeanAtom)

  const handleChange = (e) => {
    setCoffeeBean(e.target.value)
  }

  return (
    <FormField
      label='咖啡豆'
      description='要喝的咖啡豆重量'
      marginBottom={majorScale(2)}
    >
      <Pane
        position='relative'
      >
        <TextInput
          type='number'
          onChange={handleChange}
          value={coffeeBean}
          width='100%'
          paddingRight={majorScale(4)}
        />

        <InputHelperText>克</InputHelperText>
      </Pane>
    </FormField>
  )
}

export default CoffeeBeanField
