import { Grid, Typography, Button, Paper, Container, SvgIcon, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import "./pageStyles.css";

import SlideOne from "../components/img/slide1.jpg"
import HomeImg from "../components/img/homeimg22.jpg"
import bg3 from "../components/img/bg32.jpg"
import DeafGirl from "../components/img/deaf_girl.jpg"
import BlindBoy from "../components/img/blind_boy.jpg"
import Dist_Toiletories from "../components/img/distribution_of_toiletories.jpg"
import Avor_Ntigha from "../components/img/avor_ntigha_school.jpg"
import LessPrevileged from "../components/img/less_privileged.jpg"
//import Button from "../components/Button";
//import { url } from "inspector"; 

const SectionOne = styled('div')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    height: '70vh',
    maxHeight: '70vh',
    //background: 'rgba(0,0,0,0.8)',
    backgroundImage: "linear-gradient(0deg,rgba(0,0,20,0.4), rgba(0,0,20,0.4)), url("+SlideOne+")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderBottom: 'darkblue 3px solid',
});

const SectionThreex = styled('div')({
    backgroundColor: '#f1f5f8',
    maxWidth: '100%',
    height: 'auto',
    paddingTop: '3rem',
    paddingBottom: '3rem',
})

const SectionThree = styled('div')({
    height: 'auto',
    backgroundColor: '#00529a',
    paddingBottom: 50,
    paddingTop: 30,
    alignItems: 'center'
})

const SectionThreexx = styled('div')({
    height:'55vh',
    backgroundImage: "url("+bg3+")", 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:'fixed',
    backgroundSize:'cover',
    position:'relative' 
});

const SectionFour = styled('div')({
    height: 'auto',
    backgroundColor: '#ffffff',
    //padding: '30 0',
    borderTop:'solid #8aad2f 30px',
    //paddingTop: '3rem',
    paddingBottom: '3rem',
})

const Causes = styled('div')({
    height: 'auto',
    backgroundColor: '#8aad2f',
    padding: '30 0',
    paddingTop: '3rem',
    paddingBottom: '3rem',
})

const SectionFour02 = styled('div')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    backgroundColor: 'darkblue',
    backgroundImage: "linear-gradient(rgb(0,0,12,0.4), rgb(0,72,72,0.4)), url('http://seje.tonatheme.com/payonline/wp-content/themes/payonline/images/easy-step-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderBottom: 'darkblue 3px solid',
});

const SectionFive = styled('div')({
    // marginBottom:'2rem'
})

const causes = [
    {
        id:1, 
        title:"Right Of People With Disabilities",
        excerpt:"Persons with disabilities face discrimination and barriers that restrict them from participating in society on an equal basis with others every day."
    },

    {
        id:2, 
        title:"Community Healthcare",
        excerpt:"In Nigeria, thousands of poor citizens in our rural areas do not have access and affordable healthcare; those that exist are faced with poor infrastructure."
    },
    
    {
        id:3, 
        title:"Education for the less privileged children",
        excerpt:"A quality basic education is what every child should get regardless of their family background, religion and tribe. One of the important things we do is to ensure our society’s youngest members get a quality education. "
    },

    {
        id:4, 
        title:"Campaign against human trafficking",
        excerpt:"Over the years, there has been a growing concern on Human Trafficking and Illegal Migration from Nigeria through Sahara Desert and Mediterranean Sea to Italy, Spain and other parts of Europe."
    },

    {
        id:5, 
        title:"IDPs & Other less privileged Welfare",
        excerpt:"In developing countries like Nigeria, unresolved tribal conflicts, political and religious crisis, border clashes, issues such as Fulani herdsmen and farmers crisis, Boko Haram insurgency, "
    },

    {
        id:6, 
        title:"Poverty Alleviation & Skill Acquisition",
        excerpt:"Poverty cannot be completely eradicated, as it largely caused by human factor, Over the past years there has been a lot of poverty alleviation programs designed to break"
    },

]

const midImages = [
    {
        title:"Distribution of toiletries, beverages and other food item to idps",
        url:Dist_Toiletories
    },
    {
        title:"Distribution of toiletries, beverages and other food item to idps",
        url:Avor_Ntigha
    },
    {
        title:"Distribution of toiletries, beverages and other food item to idps",
        url:LessPrevileged
    }
]


function Home() {
    return <>
    
        <SectionOne sx={{ border: 'solid #000 3px' }}>
            <Grid xs={12} md={7} container alignItem="center" sx={{ p: { xs: 4, md: 12 }, verticalAlign: 'middle', lineHeight:'1em', color:'white', height: '100%', justifyContent: 'center' }}>
                <Typography>
                    <h1 style={{ padding:'20px', fontFamily: 'Roboto', textShadow:'1px 1px 1px #000', fontSize: '1.875rem', fontWeight: 500, lineHeight: '2.3rem', background:'rgba(0,0,0,0.6)', }}>
                    Awareness campaign on the dangers of illegal migration through Sahara Desert and Mediterranean Sea
               </h1>
                    <Button sx={{ borderRadius: 0, lineHeight: '2.375rem', maxWidth: '20rem', width: '18.5rem', backgroundColor: 'primary' }} variant="contained" disableElevation>Learn More</Button>
                </Typography>
            </Grid>
        </SectionOne>

        <SectionThree>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item md={6}>
        <Typography style={{fontSize:18, color:'white', lineHeight:1.4}}>
            <h2>Welcome to Edith Ogbonna Foundation</h2>
            EDITH OGBONNA FOUNDATION (EOF) was founded in 2013 by Edith E.F Ogbonna. The foundation believes strongly that it takes the power of many to end children’s illiteracy, hunger, radicalism, hooliganism, abuse and violent against women and children, exploitation and illegal migration from Nigeria. <br /><br />
            
            Get involve! Together we can bring true desired change in Nigeria. Millions of Nigerian children are out of school, they need your help to go to school. Partner with us today, let give a lasting solution to the problems facing our poor communities.
            <br /> <br />
            Our vision is to create a world where every Nigerian child will go to school, feed well and say no to exploitation.
        </Typography> 
            </Grid>
            <Grid item md={6} style={{paddingLeft:40, verticalAlign:'middle'}}>
            <img src={HomeImg} alt="" style={{ width: "100%", marginTop:30, borderRadius:5 }} />
            </Grid>
        </Grid>
            </Container>
        </SectionThree>

        <SectionThreex>

        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography style={{paddingTop: '4px', borderStyle: 'solid', borderColor: '#d59639', borderWidth: '5px 0 0 0'}}>

                        <h1 style={{fontSize: '45px', lineHeight:'23px', fontWeight: '700'}}>Our Mission</h1>

                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography style={{fontSize:'21px', color:'#7A7A7A', lineHeight:'28px', fontFamily:'Roboto', fontWeight:'300', paddingLeft:'12px'}}>
                    EOF is supporting poor communities to rehabilitate dilapidated primary schools in the rural communities through our donors; we provide books, school bags, shoes, school uniforms and other learning materials.
                    </Typography>
                </Grid>
            </Grid>
        </Container>

        <Container >

            <Grid container direction="row" style={{margin: '40px 0px', alignContent:'center'}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}><Divider /></Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            
        </Container>

        <Container style={{alignContent:'center'}} >
            <Grid container direction="row" alignItems="center" spacing="20" marginBottom="40px">
                
                   {midImages.map((img, i) =>  <Grid item xs={12} md={4}>
                        <Paper style={{backgroundImage: "url("+img.url+")", backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} className="servicebox">
                            <Typography className="servicebox_overlay" >
                                {img.title}
                            </Typography>
                        </Paper>
                    </Grid>)}

                </Grid>
            </Container>

            <Container style={{marginLeft:'auto', marginRight:'auto'}} textAlign="center">
                <Button sx={{ borderRadius: 0, lineHeight: '2.375rem', marginLeft:'auto', marginRight:'auto', maxWidth: '20rem', width: '18.5rem', backgroundColor: 'primary' }} variant="contained" disableElevation>Talk to us - +234(0)803-480-3530</Button>
            </Container>
        </SectionThreex>

         {/* Section - Causes */}
         <Causes>

         <Container style={{padding:'30px 10px'}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography style={{paddingTop: '4px', borderStyle: 'solid', borderColor: '#d59639', borderWidth: '5px 0 0 0'}}>

                        <h1 style={{fontSize: '45px', color:'white', lineHeight:'23px', fontWeight: '700'}}>Our Causes</h1>

                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography style={{fontSize:'21px', color:'#ffffff', lineHeight:'28px', fontFamily:'Roboto', fontWeight:'300', paddingLeft:'12px'}}>
                    EOF is supporting poor communities to rehabilitate dilapidated primary schools in the rural communities through our donors; we provide books, school bags, shoes, school uniforms and other learning materials.
                    </Typography>
                </Grid>
            </Grid>
        </Container>

        <Container style={{padding:'20px 10px', marginTop:20}}>
                <Grid container direction="row" alignItems="center" spacing="20" marginBottom="40px">

               {causes.map((cause, index) =>  
               <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'row', marginBottom:20}}>
                    <Typography style={{fontSize:30, width:'25px', textAlign:'center', height:'25px', padding:'6px', fontFamily:'Roboto', fontWeight:'700', lineHeight:'20px', border:'solid #ccc 2px', backgroundColor:'#d59639', borderRadius:'50%'}}>{cause.id}</Typography>

                    <Typography style={{marginLeft:20}}>
                    <span style={{fontSize: '23px', color:'#222', fontWeight:'700', fontFamily:'Roboto', marginBottom:8, display:'flex' }}>{cause.title}</span>
                    <span style={{color:'white', lineHeight: '17px', fontFamily:'Roboto', fontWeight:'500', fontSize:'19px'}}>{cause.excerpt}...</span>
                    </Typography>
                </Grid>)
                }

                </Grid>

            </Container>

        </Causes>

    <SectionThreexx>
        <Container style={{padding:40, alignContent:'center', position:'absolute', bottom:10, justifyContent:'center'}}>
                <Button sx={{lineHeight: '2.375rem', marginLeft:'40px', marginTop:'auto', marginBottom:'auto', maxWidth: '20rem', width: '18.5rem', backgroundColor: 'primary' }} variant="contained" disableElevation>Become a partner Today!</Button>
        </Container>
      
    </SectionThreexx>


        <SectionFour sx={{display: 'flex', flexDirection:{xs:'column', md:'row'}}}>
            {/* ------------- what we do -----------*/}
            <Container 
            sx={{
                backgroundImage: "linear-gradient(rgb(0,0,12,0.4), rgb(0,0,12,0.4)), url("+DeafGirl+")",
                backgroundPosition: 'top left',
                backgroundRepeat: 'no-repeat',
                minHeight:'350px',
                backgroundColor:'darkorange',
                backgroundSize: {xs:'100%', md:'57.7%'},
                padding: '10px 10px',
                marginBottom:'15px'
                }}>

                    <Grid container>
                        <Grid item xs={12} md={7}>

                        </Grid>
                        <Grid item xs={12} md={5}>
                        <Typography> </Typography>
                    <Typography style={{fontSize:30, color:'white', textShadow:'1px 1px 1px #000', padding:'20px',  fontWeight:'500'}}>
                    A deaf and dumb poor girl in Avor Ntigha primary school in need of help
                <Button sx={{ borderRadius: 5, lineHeight: '2.375rem', marginTop:'20px', maxWidth: '16rem', width: '18.5rem', backgroundColor: 'primary' }} variant="contained" disableElevation>
                    Offer Help
                </Button>
                 
                    </Typography>
                        </Grid>
                    </Grid>
                  
            </Container>

            <Container 
            sx={{
                backgroundImage: "linear-gradient(rgb(0,0,12,0.4), rgb(0,0,12,0.4)), url("+BlindBoy+")",
                backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat',
                minHeight:'350px',
                backgroundColor:'#00529a',
                backgroundSize: {xs:'100%', md:'57.7%'},
                padding: '10px 10px',
                marginBottom:'15px'
                }}>

                    <Grid container>
                        <Grid item xs={12} md={5}>
                        <Typography> </Typography>
                    <Typography style={{fontSize:30, color:'white', textShadow:'1px 1px 1px #000', padding:'20px',  fontWeight:'500'}}>
                    This is a poor boy with a bad sight that needs an urgent eye surgery <br /><br />
                <Button sx={{ borderRadius: 5, lineHeight: '2.375rem', marginTop:'20px', maxWidth: '16rem', width: '18.5rem', backgroundColor: 'primary' }} variant="contained" disableElevation>
                    Offer Help
                </Button>
                 
                    </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>

                        </Grid>
                        
                    </Grid>
                  
            </Container>

        </SectionFour>

        <SectionFive>

        <Container maxWidth="sm">
                <Typography sx={{ maxWidth: '48rem', paddingBottom:'20px', textAlign: 'center' }}>
                    <h2> Registrations and Partners</h2>
                </Typography>
                <Grid container direction="row" alignItems="center" spacing="20" marginBottom="40px">

                <Grid item xs={6} md={3}>
                    <Paper>
                    
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper>
                    
                    </Paper>
                </Grid>

                </Grid>
            </Container>
        </SectionFive>
    </>
}

export default Home;