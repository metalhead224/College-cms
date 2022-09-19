import { IconButton } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
// import { BsFillEyeFill } from "react-icons/bs";
// import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
import Table from "../../../components/Table/Table";
import TableHeader from "../../../components/Table/TableHeader";
import { useHeaderDetails } from "../../../context/HeaderContext";
import { SideBarPaths } from "../SideBar/SidebarPaths";

const Notice = () => {
  const [searchQuery, setSearchQUery] = useState<string>("");
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Slides");
  }, []);
  const handleSearch = () => {};

//   const columns: GridColDef[] = [
//     {
//       field: "Name",
//       headerName: "Name",

//       flex: 2,
//     },
//     {
//       field: "Size",
//       headerName: "Size",

//       flex: 2,
//     },
//     {
//         field: "LastModified",
//         headerName: "Last Modified",
  
//         flex: 2,
//       },
//       {
//         field: "Download",
//         headerName: "Download",
  
//         flex: 2,
//       },
//     {
//       headerName: "Actions",
//       field: "actions",
//       flex: 1,
//       renderCell: (params: GridValueGetterParams) => (
//         <>
//           <IconButton aria-label="view">
//             <BsFillEyeFill />
//           </IconButton>
//           <IconButton aria-label="edit">
//             <FiEdit />
//           </IconButton>
//           <IconButton aria-label="delete">
//             <MdDelete />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

  const rows = [
    {
      id: 1,
      Name: "examination-schedule spring.pdf",
     
      Released:"20 Aug 2021",
      Download:"examination-schedule spring.pdf"
    },
    {
        id: 2,
      Name: "annual sports event.pdf",
     
      Released:"12 April 2021",
      Download:"annual sports event.pdf"

    },
    {
        id: 3,
      Name: "teacher meeting.pdf",
     
      Released:"12 April 2021",
      Download:"teacher meeting.pdf"

    },
    {
        id: 4,
      Name: "annual sports event.pdf",
    
      Released:"12 April 2021",
      Download:"annual sports event.pdf"

    }
   
  ];
  return (
    <div className="d-flex flex-column w-100 mt-3">
      <TableHeader
        searchQuery={searchQuery}
        buttonName="Add New Notice"
        handleSearch={handleSearch}
        linkTo={SideBarPaths.noticeBoard.addNewNotice}
      />
      <div className="flex-grow-1">
        <Table
         
                  data={rows}
                  listSize={10}
                  checkbox
                  rowsPerPage={[10, 20, 30]} columns={[]}        />
      </div>
    </div>
  );
};

export default Notice;