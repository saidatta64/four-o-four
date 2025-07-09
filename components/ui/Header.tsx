"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const navItems = [{ name: "Home" }, { name: "Services" }, { name: "Projects" },{name:"About",link:"/about"}];

// Add prop type for Header
interface HeaderProps {
  onHomeClick?: () => void;
  onServicesClick?: () => void;
  onProjectsClick?: () => void;
  onWhy404Click?: () => void;
  onConnectClick?: () => void;
}

export default function Header({
  onHomeClick,
  onServicesClick,
  onProjectsClick,
  onWhy404Click,
  onConnectClick,
}: HeaderProps) {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-gray-200 dark:border-neutral-800 font-sans shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-baseline gap-2 cursor-pointer">
          <Link href="/" className="text-4xl font-bold tracking-tight">
            4O4Devs
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) =>
            item.name === "Home" && onHomeClick ? (
              <button
                key={item.name}
                onClick={onHomeClick}
                className="text-lg font-semibold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors px-2 py-1 rounded font-sans bg-transparent border-none cursor-pointer hidden lg:block"
                style={{ outline: "none" }}
              >
                {item.name}
              </button>
            ) : item.name === "Services" && onServicesClick ? (
              <button
                key={item.name}
                onClick={onServicesClick}
                className="text-lg font-semibold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors px-2 py-1 rounded font-sans bg-transparent border-none cursor-pointer hidden lg:block"
                style={{ outline: "none" }}
              >
                {item.name}
              </button>
            ) : item.name === "Projects" && onProjectsClick ? (
              <div
                key={item.name}
                onClick={onProjectsClick}
                className="text-lg font-semibold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors px-2 py-1 rounded font-sans bg-transparent border-none cursor-pointer hidden lg:block"
              >
                {item.name}
              </div>
            ) : (
              <div
                key={item.name}
                onClick={()=> router.push('/about')}
                className=" cursor-pointer text-lg font-semibold text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors px-2 py-1 rounded font-sans"
              >
                {item.name}
              </div>
            )
          )}
          {/* Why 4o4 Dropdown */}
          <div className="relative">
            <button
              className="text-lg font-semibold flex items-center gap-1 text-black hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors px-2 py-1 rounded focus:outline-none font-sans cursor-pointer"
              onClick={onWhy404Click}
            >
              Why 4O4?
            </button>
          </div>
        </nav>
        {/* Connect Us Button */}
        <button
          onClick={onConnectClick}
          className="ml-6 px-6 py-2 bg-black text-white rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors font-sans hidden lg:block cursor-pointer dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-900"
        >
          Connect Us
        </button>
      </div>
    </header>
  );
}
