import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { Chip, Link } from '@mui/material';
import './layoutStyles.css';

export default function Topbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "green", fontSize: 12 }} >
      <AppBar position="static" sx={{ bgcolor: "rgb(15, 52, 96)", lineHeight: 'normal', height: 36, minHeight: 0 }} >
        <Toolbar textAlign={{ xs: 'left', md: 'center' }} clone variant="dense" className="customizeToolbar" sx={{minHeight:0, py:2, mx:{xs:'auto', md:0}, fontFamily: 'Open Sans, Roboto'}}>
            <PhoneIcon sx={{fontSize: 16}} space />
          <Typography
            component="div"
            sx={{ display: { xs: 'flex', sm: 'block' }, fontSize: 12 }}>
         +234(0)803-480-3530
          </Typography>
          <Typography>
             &nbsp; |  &nbsp; 
          </Typography>
          <MailIcon sx={{fontSize: 16}} space />
          <Typography
            component="div"
            sx={{ display: { xs: 'flex', sm: 'block' }, fontSize: 12, paddingX: 1  }}>
         info@edithogbonnafoundation.org
          </Typography>

          <Box sx={{ flexGrow: {md:1, xs:0} }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
