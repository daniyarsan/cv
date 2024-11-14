import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Menu from "@/components/layout/Menu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Sidebar />

      <div className="col-span-2 flex flex-col gap-5">
        <Menu />

        {children}
      </div>
    </div>
  );
}
