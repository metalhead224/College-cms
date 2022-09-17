import { Avatar, Badge, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Menu, MenuItem, Paper, styled, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHeaderDetails } from "../../../context/HeaderContext";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsList from "./NotificationsList";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px"
}));



const Header = () => {
  const headerDetails = useHeaderDetails();

  const [open, setOpen] = useState(false);

  return (
    <div className="border-bottom border-secondary w-100 p-3 position-relative">
      <div className="d-flex w-100">
        <div className="d-flex flex-column">
          <h4 className="font-primary fw-bold ">{headerDetails.header}</h4>
          <p className="d-flex align-items-center mt-2 font-primary text-secondary">
            <span className="dot me-2" />
            {headerDetails.subHeader}
          </p>
        </div>
        <div className="d-flex align-items-center ms-auto">

          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Quick search"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>

          <NotificationsList />

          <UserBox onClick={e => setOpen(true)}>
            <Avatar alt="Yashu Neupane" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/301690896_1720703814956932_5516188497877223379_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LWUc23wCUdsAX_PwiKf&_nc_ht=scontent.fktm8-1.fna&oh=00_AT-MuTknJFmyI5ygOgVCaYk7n5pjN4xE59uqPeXe4Dyr4g&oe=632774F0" />
            <Typography variant="h6">Yashu Neupane</Typography>
          </UserBox>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            sx={{mt: 7}}
            open={open}
            onClose={e => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem sx={{gap: 1}}>
              <Avatar> Y </Avatar>
              <Typography variant="h6">My Account</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
