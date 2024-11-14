"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Menu() {
  const pathname = usePathname();
  // const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

  return (
    <div className="background-light900_dark200 overflow-hidden rounded-xl border">
      <ul className="flex flex-row rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <Link
            href="/"
            className={cn(
              "inline-block w-full border-r border-gray-200  p-4  focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
              pathname === "/" && "bg-gray-100 text-gray-900",
            )}
          >
            Resume
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/projects"
            className={cn(
              "inline-block w-full border-r border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
              pathname === "/projects" && "bg-gray-100 text-gray-900",
            )}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
