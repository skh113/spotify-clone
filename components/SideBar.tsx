"use client";

import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";
import { Song } from "@/types";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface Props {
  children: React.ReactNode;
  songs: Song[];
}

const SideBar: React.FC<Props> = ({ children, songs }: Props) => {
  const searchPath = "/search";

  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== searchPath,
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === searchPath,
        href: searchPath,
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 px-2">
        {children}
      </main>
    </div>
  );
};

export default SideBar;
