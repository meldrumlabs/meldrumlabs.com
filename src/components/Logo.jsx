import React from 'react'
import Image from 'next/image'
import logoUrl from './../../public/img/logo/logo.svg'

export default function Logo(props) {
  return <Image src={logoUrl} alt="Logo" {...props} />
}
