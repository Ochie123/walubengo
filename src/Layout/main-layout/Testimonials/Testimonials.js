/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import Grid from "@mui/material/Grid";
import {Typography} from "@mui/joy";
import { Card } from "@mui/joy";

// Material Kit 2 React components
import MKBox from '../MKBox'
import MKTypography from "../MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "./DefaultReviewCard";


function Information() {
  return (
    <MKBox component="section" py={12}>
       <Typography
                    fontSize="28px"
                    align="center"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.primary,
                      color: "",
                      verticalAlign: "text-top"
                    })}
                  >
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Mentored</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            2000+ public speakers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many youths across universities and governmental institutions love
            my lessons.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>


          <Grid item xs={12} md={6} lg={4}>
          <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.warning,
          color: "",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
     
      >
            <DefaultReviewCard
              name="Janness"
              date="1 day ago"
              review="Attending Bennim's public speaking workshop was an absolute game-changer! His passion and expertise in the field of public speaking are unparalleled. I now feel confident and capable whenever I step on stage. If you want to transform your public speaking abilities, I highly recommend him!"
              rating={5}
            />
            </Card>
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
          <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.success,
          color: "",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
     
      >
            <DefaultReviewCard
              name="Patrick"
              date="1 week ago"
              review="Working with Bennim as my public speaking coach was a transformative experience. His workshops are filled with interactive activities that make the learning process enjoyable and impactful. I can't thank him enough for helping me find my authentic voice and become a more persuasive and confident communicator!"
              rating={5}
            />
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.danger,
          color: "",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
     
      >
            <DefaultReviewCard
              name="Samuel"
              date="3 weeks ago"
              review="Bennim's deep understanding of communication dynamics and his ability to convey complex concepts in a clear manner left a lasting impression on me. His tips on body language, storytelling, and managing nerves were immediately applicable. If you're looking to elevate your speaking abilities, look no further!"
              rating={5}
            />
            </Card>
          </Grid>
        </Grid>
      </Typography>
    </MKBox>
  );
}

export default Information;
