import React from "react";
import { Link } from "react-router-dom";

import ICMenu from "/images/menu.svg";

const NavBar: React.FC = () => {
  const ListMenu = [
    {
      title: "Hone",
      link: "/",
    },
    {
      title: "Giới thiệu",
      link: "/gioithieu",
    },
    {
      title: "Liên Hệ",
      link: "/lienhe",
    },
    {
      title: "Blog Thời Trang",
      link: "/blogthoitrang",
    },
    {
      title: "Tin tức",
      link: "/tintuc",
    },
  ];
  return (
    <div className="flex justify-between items-center w-[1200px]">
      <div className="w-[270px]  flex items-center relative border-r-2 cursor-pointer hover:opacity-70 ">
        <img
          width={20}
          className=" absolute top-[5px]"
          src={ICMenu}
          alt={ICMenu}
        />
        <Link to="/" className="pl-10 text-base font-semibold ">
          Danh mục sản phẩm
        </Link>
      </div>
      {ListMenu.map((menu, index) => (
        <Link
          to={menu.link}
          key={index}
          className=" text-base font-semibold hover:border-b-2 hover:opacity-70 border-black "
        >
          {menu.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
