import React from 'react'
import Loader from 'react-loader'

const customStylesLoader = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: true,
    hwaccel: false,
    position: 'absolute' 
  }


export default function CustomLoader (props) {
    return (
        <Loader 
                loaded={!props.loading} 
                options={customStylesLoader}
                className="spinner" />
    )
}