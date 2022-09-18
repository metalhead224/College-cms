import * as React from "react";
import "../Slides/slides.scss";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AddSemester from "./AddSemester";
import { SideBarPaths } from "../../SideBar/SidebarPaths";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddNewSlides = (props) => {
  const card = [
    {
      course: "BCIS",
      icon: <LibraryBooksSharpIcon />,
      course1: "Bsc Nursing",
    },
    {
      course: "BBA",
      icon: <LibraryBooksSharpIcon />,
      course1: "BPH",
    },
    {
      course: "BHCM",
      icon: <LibraryBooksSharpIcon />,
      course1: "Bsc MB",
    },
    {
      course: "BBA-BI",
      icon: <LibraryBooksSharpIcon />,
      course1: "Bsc MLT",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
    <div>
      <p>Management</p>
      {card.map((item, index) => (
        <div className="card" onClick={handleOpen}>
          <>
            <p>{item.icon}</p>
          </>
          <>
            <p>{item.course}</p>
          </>
        </div>
      ))}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
          </Typography>
        </Box>
      </Modal>
      <p>Science and Technology</p>
      {card.map((item, index) => (
        <div className="card" onClick={handleOpen}>
          <>
            <p>{item.course1}</p>
          </>
          <>
            <p>{item.icon}</p>
          </>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button variant="contained" href="#contained-buttons">Link</Button>
                 

          
          </Typography>
        </Box>
      </Modal>

      <div className="card2" onClick={handleOpen}>
        <p>Bsc MM</p>
        <p>
          <LibraryBooksSharpIcon />
        </p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn" >1st semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn">2nd semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn">3rd semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn">4th semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn">5th semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn" >6th semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn">7th semester</Button></Link>
         <Link to={SideBarPaths.academics.AddSemester}> <Button variant="contained" className="btn" >8th semester</Button></Link>
          
          </Typography>
        </Box>
      </Modal>
      {/* <Routes>
        <Route path="AddSemester" element={<AddSemester/>}></Route>
      </Routes>
       */}
     
     
    </div>
  );
};

export default AddNewSlides;
