"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Desktop & Mobile Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/main-transparent-2.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/members"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Thành viên
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Bảng xếp hạng
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Ủng hộ tôi
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Góp ý
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
