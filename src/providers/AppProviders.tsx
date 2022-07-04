import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return <BrowserRouter>{children}</BrowserRouter>
}

AppProviders.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppProviders
