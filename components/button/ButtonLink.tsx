import clsx from 'clsx'
import { Link } from 'expo-router'

interface Props {
  content: string
  url: string
  isAbsolute?: boolean
}

function ButtonLink({ content, url, isAbsolute }: Props) {
  const classes = {
    button: clsx(
      'justify-items-center rounded-3xl bg-red-500 px-28 py-3 text-center text-lg text-white',
      isAbsolute === true && 'absolute bottom-5 right-10'
    )
  }

  return (
    <Link className={classes.button} href={url}>
      {content}
    </Link>
  )
}

export default ButtonLink
