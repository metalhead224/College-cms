import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useHeaderDetails } from "../../../context/HeaderContext";
import { SideBarPaths } from "../SideBar/SidebarPaths";
import { noticeboarddMenuList } from "./NoticeBoardItemList";

const NoticeBoard = () => {
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setHeader("Notice Board");
    headerDetails.setSubHeader("Notice Board Dashboard");
  }, []);

  return (
    <div className="container-fluid p-0 mt-3 ">
      <div className="grid-dashboard  w-100 ">
        {noticeboarddMenuList.map((menuItem) => (
          <Link
            to={menuItem.link}
            className="text-decoration-none card text-center bg-light-gray p-4 border-light-border"
          >
            {menuItem.icon}
            <p className="font-primary des fw-semibold mt-2">{menuItem.name}</p>
          </Link>
        ))}
        {/* --------------------------------------- */}
      </div>  
        {/* <div role="button" className="btn-gradient-primary text-uppercase h-100 d-flex px-3 align-items-center justify-content-cneter">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="me-2" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path  fill="none" d="M0 0h24v24H0z"></path>
            <path  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
           Add New Notice
        </div> */}
       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <Link to={SideBarPaths.noticeBoard.addNewNotice}> <Button variant="contained" className="btn" >Add New Notice</Button></Link>

         </Typography>
       
    </div>
  );
};

export default NoticeBoard;
