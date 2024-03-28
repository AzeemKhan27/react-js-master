import React from 'react'
import logoImage from "../../src/assets/logo1.jpg"

function Logo({width = "100px"}) {
  return (
    <img src={logoImage} style={{ width: '100px', height: 'auto', borderRadius: '50%' }}  alt="Logo" />
  )
}

export default Logo