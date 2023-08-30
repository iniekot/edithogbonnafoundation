import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { Link, Button } from '@mui/material';
import Logo from '../img/logo.png';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Appbar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menu = [
    {
      id:1, name:"HOME", path:""
    },
    {
      id:2, name:"ABOUT US", path:"/about-us"
    },
    {
      id:3, name:"OUR CAUSES", path:"/our-causes"
    },
    {
      id:4, name:"PROGRAMES & EVENTS", path:"/programes"
    },
    {
      id:5, name:"OUR PARTNERS", path:"/partners"
    },
    {
      id:6, name:"CONTACT", path:"/contact"
    }
  ]
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"transparent"}>
        <Toolbar sx={{height:"6rem"}}>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
         {/*} <img height="50" src="https://res.cloudinary.com/iniekot/image/upload/v1636835524/justcooklogo111.png"  />*/}
          <img src={Logo} alt="" style={{ height:"4rem" }} />
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, fontWeight: 'medium' }}>
            <nav style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              {menu.map((m, i) => <> 
              <Link underline="none" color="inherit" href={m.path}
              sx={{ my: 1, mx: 1.5, py:0, px:'5px', fontSize:'14px' }}>{m.name}</Link>
              <Divider orientation="vertical" /></>)
              }
            </nav>
          </Box>

          <Box sx={{fontWeight: 'medium', paddingLeft:'1rem', display: { xs: 'none', md: 'flex' }}} >
            <nav>
              <Button sx={{borderRadius:0, lineHeight:'2.375rem', maxWidth:'12rem', width:'10rem', color:'primary'}} variant="outlined">
              DONATIONS
              </Button>
            </nav>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          display: { xs: 'flex', md: 'none' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={style} component="nav">
            <ListItem button divider borderTop="">
            <Link underline="none" color="inherit" href="#" sx={{ my: 1, mx: 1.5 }}>
              How it Works
              </Link>
            </ListItem>

            <ListItem button divider>
              <Link 
              underline="none"
              color="inherit"
              href="#"
              sx={{ my: 1, mx: 1.5 }}>
              Recipe Box
              </Link>
            </ListItem>


            <ListItem button divider>
              <Link             
              underline="none"
              color="inherit"
              href="#"
              sx={{ my: 1, mx: 1.5 }}>
              Blog
              </Link>
            </ListItem>


            <ListItem button divider>
              <Link             
              underline="none"
              color="inherit"
              href="#"
              sx={{ my: 1, mx: 1.5 }}>
              Market
              </Link>
            </ListItem>

            <ListItem button divider>
            <Link
              underline="none"
              color="inherit"
              href="#"
              sx={{ my: 1, mx: 1.5 }}>
              Sign In
              </Link>
            </ListItem>

            <ListItem>
              <Button sx={{borderRadius:0, lineHeight:'2.375rem', maxWidth:'20rem', width:'16.5rem', color:'primary'}} variant="outlined">
                Choose a Recipe Box
              </Button>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
