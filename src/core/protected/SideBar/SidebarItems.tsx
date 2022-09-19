import { MdLayers } from "react-icons/md";
import { SideBarPaths } from "./SidebarPaths";
type SideBarItems = {
  path: string;
  title: string;
  icon: any;
  children?: {
    path: string;
    title: string;
  }[];
}[];

export const SideBarItems: SideBarItems = [
  {
    path: SideBarPaths.dashboard,
    title: "Dashboard",
    icon: <MdLayers size={25} />,
  },
  {
    path: SideBarPaths.usermanagement.base,
    title: "User Management",
    icon: <MdLayers size={25} />,
    children: [
      {
        path: SideBarPaths.usermanagement.userPermissions,
        title: "User Permission",
      },
      {
        path: SideBarPaths.usermanagement.userRole,
        title: "User Roles",
      },
      {
        path: SideBarPaths.usermanagement.users,
        title: "Users",
      }, {
        path: SideBarPaths.usermanagement.library,
        title: "Library",
      },
      {
        path: SideBarPaths.usermanagement.accounts,
        title: "Accounts",
      },
      {
        path: SideBarPaths.usermanagement.forum,
        title: "Forum",
      },
      {
        path: SideBarPaths.usermanagement.sms,
        title: "Sms and Notification",
      },
      
    ],
  },
  {
    path: SideBarPaths.academics.base,
    title: "Academics",
    icon: <MdLayers size={25} />,
    children: [
      {
        path: SideBarPaths.academics.faculty,
        title: "Faculty",
      },
      {
        path: SideBarPaths.academics.program,
        title: "Program",
      },
      {
        path: SideBarPaths.academics.courses,
        title: "Courses",
      },
      {
        path: SideBarPaths.academics.slides,
        title: "Slides",
      },
      {
        path: SideBarPaths.academics.attendance,
        title: "Attendance",
      },
    ],
  },
  {
    path: SideBarPaths.noticeBoard.Notice,
    title: "Notice Board",
    icon: <MdLayers size={25} />,
    children:[
      {
        path: SideBarPaths.noticeBoard.Notice,
        title: "Notice ",

      },{
        path: SideBarPaths.noticeBoard.SMS,
        title: "SMS ",

      },{
        path: SideBarPaths.noticeBoard.Email,
        title: "Email ",

      },{
        path: SideBarPaths.noticeBoard.Lorem,
        title: "Lorem ",

      },{
        path: SideBarPaths.noticeBoard.Exam,
        title: " Exam Routine ",

      },{
        path: SideBarPaths.noticeBoard.Results,
        title: "Results",

      }
    ]
  },
];
