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
    library:"/dashboard/user-management/library",
    accounts:"/dashboard/user-management/account",
    forum:"/dashboard/user-management/forum",
    sms:"/dashboard/user-management/sms-notification",

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

  noticeBoard: {
    base:"/dashboard/notice-board",
    Notice:"/dashboard/notice-board/notice",
    SMS:"/dashboard/notice-board/sms",
    Email:"/dashboard/notice-board/Email",
    Lorem:"/dashboard/notice-board/Lorem",
    Exam:"/dashboard/notice-board/Exam-Routine",
    Results:"/dashboard/notice-board/Results",
  // AddNewEmail: "/dashboard/notice-board/AddNewEmail",


}
};
