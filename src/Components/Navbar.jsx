/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../Context/DarkModeContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  
  const handleScroll = (sectionId) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      id: "about",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      id: "testimonials",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      id: "contact",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleScroll("testimonials"); }}>Testimonials</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}>Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="dark-mode-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => item.id && handleScroll(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
