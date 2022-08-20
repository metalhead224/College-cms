import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHeaderDetails } from "../../../context/HeaderContext";
import { academicsMenuList } from "./AcademicsItemList";

const Academics = () => {
  const headerDetails = useHeaderDetails();

  useEffect(() => {
    headerDetails.setSubHeader("Academics Dashboard");
  }, []);
  return (
    <div className="container-fluid p-0 mt-3 ">
      <div className="grid-dashboard  w-100 ">
        {academicsMenuList.map((menuItem) => (
          <Link
            to={menuItem.link}
            className="text-decoration-none card text-center bg-light-gray p-4 border-light-border"
          >
            {menuItem.icon}
            <p className="font-primary des fw-semibold mt-2">{menuItem.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Academics;
