import React from 'react';
import { Divider } from '@mui/material';
import Typography from "@mui/joy/Typography"
import NavigationBar from './NavigationBar'
import Footers from './Footers'
import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>

        <NavigationBar/>
        <div className="true">{children}</div>
<Divider/>
<Typography
                    fontSize="12px"
                   
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.primary,
                      color: "primary.400",
                      verticalAlign: "text-top"
                    })}
                  >
        <Footers/>
        </Typography>
        </>
    )
}

export default MainLayout;