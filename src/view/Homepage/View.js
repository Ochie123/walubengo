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
import TopTestimonial from '../../Layout/main-layout/Testimonials/TopTestimonial'

const Main = () => {
  const mobileDevice = useMediaQuery("(max-width:650px)")

  return (
    <>
    <Page title="Home">
    {mobileDevice ? (
 
    <Box >
          <Typography variant={mobileDevice ? 'h4' : 'h2'}>
           
         
         <PromotionalFull/>
    
         <Learn/>

         <Lessons/>
       <ReadyToGetStarted/>
       
        <UpcomingSoon/>  
        <TopTestimonial/> 
        <Testimonials/>
        </Typography>
    </Box>
  
    ) : (
        <>
        <PromotionalFull/>
        <div class="container my-5">
   
          <Learn/>
          <Lessons/>
          <ReadyToGetStarted/>
         
        <UpcomingSoon/>
        <TopTestimonial/>
        <Testimonials/>
        </div>
        </>
)}
    </Page>

    </>
  )
}

export default Main
