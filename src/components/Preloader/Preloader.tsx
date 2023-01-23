import React, { FC } from 'react'
import Loader from '../Icons/Loader/Loader'

const Preloader: FC = (): JSX.Element => {
  return (
    <Loader width="500" height="500" />
  )
}

export default Preloader