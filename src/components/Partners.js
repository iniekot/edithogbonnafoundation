import React from 'react'
import { Grid, Container } from "@mui/material";


const Partners = () => {
    return (
        <div style={{backgroundColor: '#f9f9f9', paddingTop: '3rem', paddingBottom: '3rem'}}>
            <Container>
                <Grid container spacing="2" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={2}>
                      <img alt="" src="https://source.unsplash.com/random" style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={2}>
                      <img alt="" src="https://source.unsplash.com/random" style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={2}>
                      <img alt="" src="https://source.unsplash.com/random" style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={2}>
                      <img alt="" src="https://source.unsplash.com/random" style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={2}>
                      <img alt="" src="https://source.unsplash.com/random" style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={2}>
                      <img  alt=""src="https://source.unsplash.com/random" style={{width:'100%'}} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Partners
