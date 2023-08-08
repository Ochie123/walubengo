import React from "react"
import {  Grid } from "@mui/material"

import Typography from "@mui/joy/Typography"


import Promotional from "./Promotional"

// https://source.unsplash.com/XyONj_Aq-rg

// https://unsplash.com/photos/RGxEXgEym5U
export default function PromotionalFull() {
 

  return (
    <div className="promotional-full-container">
       <Typography
                    fontSize="28px"
                   
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.warning,
                      color: "primary.400",
                      verticalAlign: "text-top"
                    })}
                  >
         <div className="container">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Promotional pageHeaderBgImg="" pageHeaderMinVh="20vh" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="row justify-content-center">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/WnC3DzH/walubengo-removebg-preview.png" alt="walubengo-removebg-preview" border="0"
            style={{ width: "100%", border:"0", height: "100%" }}
            /></a>

            </div>
            
          </Grid>
        </Grid>
        </div>
        </Typography>
    </div>
  )
}