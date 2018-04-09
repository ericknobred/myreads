import React, { Component } from 'react'
import Loader from 'react-loader'
import PropTypes from 'prop-types'

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


class CustomLoader extends Component {

    render(){
        return (
            <Loader 
                    loaded={!this.props.loading} 
                    options={customStylesLoader}
                    className="spinner" />
        )
    }
}

CustomLoader.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default CustomLoader