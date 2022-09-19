import AddNewFaculty from '../Academics/Faculty/AddNewFaculty';
import AddSemester from '../Academics/Slides/AddSemester';
export const SideBarPaths = {
  main: "/dashboard",
  dashboard: "/dashboard/main",
  usermanagement: {
    base: "/dashboard/user-management",
    addNewUser: "/dashboard/user-management/add-new-user",
    userRole: "/dashboard/user-management/roles",
    userPermissions: "/dashboard/user-management/permissions",
    addNewPermission: "/dashboard/user-management/add-new-permission",
    addNewRole: "/dashboard/user-management/add-new-role",
    users: "/dashboard/user-management/users",
  },
  academics: {
    base: "/dashboard/academics",
    faculty: "/dashboard/academics/faculty",
    program: "/dashboard/academics/program",
    courses: "/dashboard/academics/courses",
    addNewCourse: "/dashboard/academics/add-new-course",
    slides: "/dashboard/academics/slides",
    attendance: "/dashboard/academics/attendance",
    addNewFaculty : "/dashboard/academics/add-new-faculty",
    addNewProgram : "/dashboard/academics/add-new-program",
    addNewSlides:"/dashboard/academics/slides",
    AddSemester:"/dashboard/academics/AddSemester",
    FirstSemesterSlides:"/dashboard/academics/FirstSemesterSlides",
  },

  noticeBoard:{
    base: "/dashboard/notice-board",
    noticeboard:"/dashboard/notice-board/noticeboard",
    notice:"/dashboard/notice-board/notice",
  addNewNotice:"/dashboard/notice-board/add-new-notice",
}
};
