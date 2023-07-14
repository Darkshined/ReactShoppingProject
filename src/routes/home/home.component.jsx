import { Outlet } from "react-router-dom";
import CategoryDirectory from "../../components/directory/directory-main-container.component";

function Home() {
  

  return (
    <div>
      <CategoryDirectory ></CategoryDirectory> 
      <Outlet />{" "}
    </div>
  );
}

export default Home;
