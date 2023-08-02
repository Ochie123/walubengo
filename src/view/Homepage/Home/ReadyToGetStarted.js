import React from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/joy/Typography"
//import Typography from '@mui/material/Typography';
import Zoom from "@mui/material/Zoom"

export default function ReadyToGetStarted({
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

  return (
    <>
      <section>
        <div className="page-header py-9 py-md-6" style={styles.pageHeader}>
        <Typography
                    fontSize="48px"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.succes,
                      color: "primary.400",
                      verticalAlign: "text-top"
                    })}
                  >
          <div className="">
            <div className="row justify-content-center">
              <div className="row justify-content-center">
              <Box sx={{ display: "flex" }}>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "500ms" : "0ms" }}
                >         
            <Typography variant="h2"  color="" gutterBottom>
                  Ready to get started with Public speaking?
                  </Typography>
                  </Zoom>
              </Box> 
                <p className="lead mb-sm-6 mb-4">
                <Typography
                    fontSize="28px"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.succes,
                      color: "warning.400",
                      verticalAlign: "text-top"
                    })}
                  >        
                  
                  Update your communication skills, develop new expertise and obtain a professional certificate! Whatever your career plans, I'm here to advise and support you. Learn a profession with a future with the leader in public speaking.
                  </Typography>
                  </p>
                <div className="container">

       
      </div>
              </div>
            </div>
          </div>
          </Typography>
        </div>
 
      </section>
    </>
  );

}
