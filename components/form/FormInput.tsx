import clsx from 'clsx'
import { TextInput, View } from 'react-native'

interface Props {
  valueInput: string
  placeHolder: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

function FormInput({ valueInput, placeHolder, leftIcon, rightIcon }: Props) {
  const classes = {
    content: clsx(
      'w-80 flex-row items-center rounded-2xl bg-gray-200 py-3 px-3',
      rightIcon !== undefined && 'justify-between'
    ),
    input: clsx('text-lg', rightIcon !== undefined && 'w-4/5')
  }

  return (
    <View className={classes.content} style={{ gap: 10 }}>
      {leftIcon !== undefined && leftIcon}
      <TextInput className={classes.input} placeholder={placeHolder} />
      {rightIcon !== undefined && rightIcon}
    </View>
  )
}

export default FormInput
