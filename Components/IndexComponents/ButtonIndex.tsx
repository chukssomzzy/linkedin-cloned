import React from 'react'
import  { IconType } from '../../types'

type Props = {
    children: string,
    iconStyle: string,
    wrap: boolean
} & Omit<React.ComponentProps<'button'>, 'children'>  & IconType

const ButtonIndex = ({Icon, children,iconStyle,wrap,...rest}: Props) => {
  return (
    <button className='inputButton group' {...rest}>
            <Icon className={`${iconStyle}`} />
        <h4 className={ `opacity-80 group-hover:opacity-100 ${wrap && 'whitespace-nowrap'}` }>
            {children}
        </h4>
    </button>
  )
}

export default ButtonIndex
