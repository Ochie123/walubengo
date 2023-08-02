import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import Page from '../../components/Page';
//import NewlyListed from './NewlyListed';
import UpcomingSoon from './UpcomingSoon';
import PromotionalFull from './PromotionalFull';
import Learn from "../Homepage/Home/Learn"

import Lessons from "../../Layout/main-layout/WhatITeach/Lessons";

import ReadyToGetStarted from "./Home/ReadyToGetStarted";
import Testimonials from '../../Layout/main-layout/Testimonials/Testimonials'
const Main = () => {
  const mobileDevice = useMediaQuery("(max-width:650px)")

  return (
    <>
    <Page title="Home">
    {mobileDevice ? (
 
    <Box >
          <Typography variant={mobileDevice ? 'h4' : 'h1'}>
           
          </Typography>
         <PromotionalFull/>
    
         <Learn/>

         <Lessons/>
       <ReadyToGetStarted/>
       
        <UpcomingSoon/>   
        <Testimonials/>
    </Box>
  
    ) : (
        <>
        <PromotionalFull/>
        <div class="container my-5">
   
          <Learn/>
          <Lessons/>
          <ReadyToGetStarted/>
         
        <UpcomingSoon/>
        <Testimonials/>
        </div>
        </>
)}
    </Page>

    </>
  )
}

export default Main
