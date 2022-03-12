import {Text, majorScale} from 'evergreen-ui'

const InputHelperText = ({children}) => {
  return (
    <Text
      position='absolute'
      right={majorScale(2)}
      top={0}
      bottom={0}
      marginY='auto'
      height={14}
      lineHeight='14px'
      color='gray500'
      size={300}
      display='block'
    >
      {children}
    </Text>
  )
}

export default InputHelperText
