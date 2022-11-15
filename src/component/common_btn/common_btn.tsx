import React from 'react'
import './common_btn.css'

type BtnProps = {
  children: JSX.Element | string,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  styles?: any,
  disabled?: boolean
}

export const defaultStyles = {
  backgroundColor: '#64b5f6',
  color: 'white',
  width: "120px",
  height: "40px",
  margin: 'unset',
  border: 'unset'
}

const CommonBtn: React.FC<BtnProps> = ({ children, onClick, styles = defaultStyles, disabled = false }) => {
  return (
    <button className='btn_common' onClick={onClick} style={{
      '--background-color': styles.backgroundColor,
      '--color': styles.color,
      '--width': styles.width,
      '--height': styles.height,
      '--margin': styles.margin,
      '--border': styles.border
    } as React.CSSProperties} disabled={disabled}>{children}</button>
  )
}

export default CommonBtn