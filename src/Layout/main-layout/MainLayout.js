import React from 'react';
import { Divider } from '@mui/material';
import NavigationBar from './NavigationBar'
import Footers from './Footers'
import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>

        <NavigationBar/>
        <div className="true">{children}</div>
<Divider/>
        <Footers/>
        </>
    )
}

export default MainLayout;