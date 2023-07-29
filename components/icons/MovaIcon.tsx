import clsx from 'clsx'
import { Image } from 'react-native'

const movaImage = require('../../assets/mova.png')

function MovaIcon() {
  const classes = {
    image: clsx('h-6 w-6')
  }

  return <Image className={classes.image} source={movaImage} />
}

export default MovaIcon
