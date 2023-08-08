import React from "react";
import Box from "@mui/material/Box"
//import Typography from "@mui/joy/Typography"
import Typography from '@mui/material/Typography';
import Zoom from "@mui/material/Zoom"
import { useMediaQuery } from "@mui/material"

export default function Promotional({

  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}) {
  const styles = {
    pageHeader: {
      backgroundImage: `url(${pageHeaderBgImg})`,
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
  const [checked, setChecked] = React.useState(true)

  const mobileDevice = useMediaQuery("(max-width:650px)")
  
  return (
    <>
      <section>
        <div className="page-header py-9 py-md-6" style={styles.pageHeader}>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-9 text-center mx-auto">
              <Box sx={{ display: "flex" }}>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "500ms" : "0ms" }}
                >     
 
            <Typography variant={mobileDevice ? "h4" : "h2"} color='green' gutterBottom>
                  Skills you need to be a successful public speaker
                  </Typography>
                  </Zoom>
              </Box> 
                <p className="lead text-blue mb-sm-6 mb-4">Public speaker | Author | Speech Trainer | Founder of Voice of Benny Foundation</p>


                
                <div className="container">

       
             </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}
