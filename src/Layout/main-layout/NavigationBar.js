import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
//import {Typography} from '@joy/material'

import { Typography } from '@mui/joy';

function ResponsiveAppBar() {



  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-static py-3 start-0 end-0 bg-blue">
      <div className="container px-1">
        <div className="navbar-brand font-weight-bolder ms-lg-0 ">
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
            
              fontFamily: 'arial',
              fontWeight: 1700,
              letterSpacing: '.3rem',
              color: 'blue',
              textDecoration: 'none',
            }}
          >
          <Link to={'/'}>Walubengo</Link>
          </Typography>
        </div>
       
          <>
            <span>

    
              <Link to={'/'}>
                <Button 
                  color="primary"
                  variant="outlined"
                  className="">
                  Log in
                </Button>
                </Link>
            </span>
          </>
      
      </div>
    </nav>
  );
}

export default ResponsiveAppBar;