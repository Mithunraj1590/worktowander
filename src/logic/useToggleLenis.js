import { useLenis } from '@studio-freight/react-lenis'
import React from 'react'

export const useToggleLenis = () => {
const lenis = useLenis()

const lenisStart = () => {
    lenis?.start()
}

const lenisStop = () => {
    lenis?.stop()
}


  return {
    lenisStart,
    lenisStop
  }
}
