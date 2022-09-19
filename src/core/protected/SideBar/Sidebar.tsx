import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SideBarItems } from "./SidebarItems";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className="flex-shrink-0 p-3 bg-dark-blue-10 text-white"
      style={{ width: "275px" }}
    >
      <Link
        to={"/dashboard"}
        className="d-flex align-items-center justify-content-center py-3 mb-3 text-decoration-none text-white"
      >
       

        <img src="https://nobelcollege.edu.np/Resources/Images/logo.png" alt="Nobel college"/>
      </Link>

      <ul className="list-unstyled ps-0 text-white">
        {SideBarItems.map((menu, index) => (
          <li className="mb-4" key={index}>
            {menu.children ? (
              <>
                <div
                  onClick={() => {
                    navigate(menu.path);
                  }}
                  className={`btn  ${
                    (location.pathname === menu.path ||
                      location.pathname.includes(menu.path)) &&
                    "btn-gradient-primary"
                  }  text-white w-100 py-2 text-start d-flex align-items-center fw-normal`}
                >
                  {menu.icon}
                  <p className="font-primary mx-3 flex-grow-1 fw-normal">
                    {menu.title}
                  </p>
                  <BsChevronDown
                    size={20}
                    className="justify-self-end flex-shrink-0"
                    data-bs-toggle="collapse"
                    data-bs-target={`#sidebarCollapse${index}`}
                    aria-expanded="true"
                    aria-controls={`sidebarCollapse${index}`}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div
                  className="collapse  text-white  my-2 ps-4 font-primary  fs-6 fw-light"
                  id={`sidebarCollapse${index}`}
                >
                  <ul>
                    {menu?.children?.map((child) => (
                      <Link
                        to={child.path}
                        className="mb-1 text-decoration-none text-white"
                      >
                        <li
                          className={`py-3 d-flex flex-column w-auto me-3 ${
                            location.pathname === child.path
                              ? "text-purple"
                              : "text-white "
                          } `}
                        >
                          {child.title}
                          {/* {location.pathname === child.path && (
                            <span className="line bg-purple mt-1" />
                          )} */}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link to={menu.path} className=" text-decoration-none text-white">
                <div
                  className={`btn ${
                    location.pathname === menu.path && "btn-gradient-primary"
                  } text-white w-100 py-2 text-start d-flex align-items-center fw-normal`}
                  role="button"
                >
                  {menu.icon}
                  <p className="font-primary  mx-3 fw-normal">{menu.title}</p>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
