import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-light-grayish-cyan min-h-screen">
      <picture>
        <source
          srcSet="./assets/images/bg-header-desktop.svg"
          media="(min-width: 768px)"
        />
        <img
          src="./assets/images/bg-header-mobile.svg"
          alt="header background"
          className="bg-desaturated-dark-cyan w-full"
        />
      </picture>
      <Outlet />
    </div>
  );
};

export default Layout;
