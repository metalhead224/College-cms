import { Avatar, Badge, List, ListItem, ListItemAvatar, ListItemText, Menu } from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, styled } from "@mui/system";

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    margin: "15px"
}));

const NotificationsList = () => {

    const [open, setOpen] = useState(false);
    return (
        <div>

            <Icons onClick={e => setOpen(true)}>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon color="action" />
                </Badge>
            </Icons>


            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={e => setOpen(false)}
              sx={{mt:7}}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Umang dost" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/79660686_2800267863385970_7899677843670433792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rCTUP7hWh_MAX-OcPw3&_nc_ht=scontent.fktm8-1.fna&oh=00_AT8hCi3m5Y7oB1FAkQ1d972RS-W5rwrQ684FGVehS9d1bA&oe=634784F5" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Report update"
                        secondary={
                            <React.Fragment>
                                {" — We need to prepare report as soon as possible "}
                            </React.Fragment>
                        }
                    />
                </ListItem>

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Mardi Himal janey?"
                        secondary={
                            <React.Fragment>
                                {" — You got A+ on weekly test..."}
                            </React.Fragment>
                        }
                    />
                </ListItem>

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/301690896_1720703814956932_5516188497877223379_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LWUc23wCUdsAX_PwiKf&_nc_ht=scontent.fktm8-1.fna&oh=00_AT-MuTknJFmyI5ygOgVCaYk7n5pjN4xE59uqPeXe4Dyr4g&oe=632774F0" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Important Notice"
                        secondary={
                            <React.Fragment>
                                {" — Routine Got out"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            </Menu>
        </div>
    );
}

export default NotificationsList;