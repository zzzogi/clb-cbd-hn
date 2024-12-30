import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
        <span className="text-xl font-bold">PetShow</span>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Trang chủ
        </Link>
        <Link href="/members" className="text-gray-600 hover:text-gray-900">
          Thành viên
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Bảng xếp hạng
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Ủng hộ tôi
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Góp ý
        </Link>
        {/* <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
          Login
        </button> */}
      </div>
    </nav>
  );
};

export default Header;
