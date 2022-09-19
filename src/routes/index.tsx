import { Children, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";


//use react lazy to import components for lazy loading components

const Login = lazy(() => import("../core/public/LogIn/Login"));
const Dashboard = lazy(() => import("../core/protected/Dashboard/Dashboard"));
const UserManagement = lazy(
  () => import("../core/protected/UserManagement/UserManagement")
);
const DashboardMain = lazy(
  () => import("../core/protected/Dashboard/DashboardMain")
);
const Academics = lazy(() => import("../core/protected/Academics/Academics"));
const NoticeBoard = lazy(
  () => import("../core/protected/NoticeBoard/NoticeBoard")
);
const Permissions = lazy(
  () => import("../core/protected/UserManagement/Permissions/Permissions")
);
const Roles = lazy(
  () => import("./../core/protected/UserManagement/Roles/Roles")
);
const Users = lazy(
  () => import("../core/protected/UserManagement/Users/Users")
);
const Faculty = lazy(
  () => import("../core/protected/Academics/Faculty/Faculty")
);
const Program = lazy(
  () => import("../core/protected/Academics/Program/Program")
);
const Courses = lazy(
  () => import("../core/protected/Academics/Courses/Courses")
);
const UserManagementDashboard = lazy(
  () => import("../core/protected/UserManagement/index")
);

const AddNewPermission = lazy(
  () => import("../core/protected/UserManagement/Permissions/AddNewPermission")
);

const AddNewCourse = lazy(
  () => import("../core/protected/Academics/Courses/AddNewCourse")
);

const AddNewFaculty = lazy(
  () => import("../core/protected/Academics/Faculty/AddNewFaculty")
);
const AddNewSlides = lazy(
  () => import("../core/protected/Academics/Slides/AddNewSlides")
);
const AddSemester=lazy(
  ()=>import("../core/protected/Academics/Slides/AddSemester")
)
const FirstSemesterSlides=lazy(
  ()=>import("../core/protected/Academics/Slides/FirstSemesterSlides")
)


// const AddNewAttendance = lazy(
//   () => import("../core/protected/Academics/Atttendances/AddNewAttendance")
// );
const AddNewEmail = lazy(
  () => import("../core/protected/NoticeBoard/Emaile/AddNewEmail")
);




const AddNewProgram = lazy(
  () => import("../core/protected/Academics/Program/AddNewProgram")
);
const AcademicDashboard = lazy(
  () => import("../core/protected/Academics/index")
);


const AddNewRole = lazy(
  () => import("../core/protected/UserManagement/Roles/AddNewRole")
);

const AddNewUser = lazy(
  () => import("../core/protected/UserManagement/Users/AddNewUser")
);


const MainAttendance=lazy(
  ()=>import ('../core/protected/Academics/Attendance/MainAttendance')
)
const Semesters=lazy(
  ()=>import ('../core/protected/Academics/Attendance/Semesters')
)
const EightSemester=lazy(
  ()=>import ('../core/protected/Academics/Attendance/EigthSemester')
)

const AttendanceTable=lazy(
  ()=>import ('../core/protected/Academics/Attendance/AttendanceTable')
)
const AttendanceChart=lazy(
  ()=>import ('../core/protected/Academics/Attendance/AttendanceChart')
)



const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "main",
          element: <DashboardMain />,
        },
        {
          path: "user-management",
          element: <UserManagementDashboard />,
          children: [
            {
              path: "",
              element: <UserManagement />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "roles",
              element: <Roles />,
            },
            {
              path: "permissions",
              element: <Permissions />,
            },
            {
              path: "add-new-permission",
              element: <AddNewPermission />,
            },
            {
              path: "add-new-role",
              element: <AddNewRole />,
            },
            {
              path: "add-new-user",
              element: <AddNewUser />,
            },
          ],
        },
        {
          path: "notice-board",
          element: <NoticeBoard/>,
          children: [
            {
              path: "Notice",
              element: <NoticeBoard />,
            },
            {
              path: "SMS",
              element: <NoticeBoard />,
            },
            {
              path: "Email",
              element: <AddNewEmail/>,
            },
            {
              path: "Lorem",
              element: <NoticeBoard />,
            },
            {
              path: "Exam-Routine",
              element: <NoticeBoard />,
            },
            {
              path: "Results",
              element: <NoticeBoard />,
            },
          ],
        },
        {
          path: "academics",
          element: <AcademicDashboard />,
          children: [
            {
              path: "",
              element: <Academics />,
            },
            {
              path: "faculty",
              element: <Faculty />,
            },
            {
              path: "add-new-faculty",
              element: <AddNewFaculty />,
            },
            {
              path: "add-new-program",
              element: <AddNewProgram />,
            },
            {
              path: "program",
              element: <Program />,
            },
            {
              path: "courses",
              element: <Courses />,
            },
            {
              path: "add-new-course",
              element: <AddNewCourse />,
            },
            {
              path:"AddSemester",
              element:<AddSemester/>
             },
            {

              path: "slides",
              element: <AddNewSlides/>,
              children:[
                
              ]
            },{
              path:"FirstSemesterSlides",
              element:<FirstSemesterSlides/>
             },
             
                
          
            // {
            //   path: "attendance",
            //   element: <AddNewAttendance />,
            // },
          
            {
              path: "attendance",
              element: <MainAttendance/>,
              children:[
                {
                  path:'semesters',
                  element:<Semesters/>,
                }
              ]
            },
            {path:'/dashboard/academics/attendance/semesters/8',
            element:<EightSemester/>
          },
          {path:'/dashboard/academics/attendance/semesters/8/attendancetable',
            element:<AttendanceTable/>
          },
          {path:'/dashboard/academics/attendance/semesters/8/attendancetable/attendancechart',
          element:<AttendanceChart/>
        },

          ],
        },
        {
          path: "users",
          element: <NoticeBoard />,
        },
        
      ],
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<LoadingSpinner className="spinner-border" />}>
          <Login />
        </Suspense>
      ),
    },
  ]);

  return routes;
};

export default AppRoutes;
