"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { JSX, SVGProps } from "react";
import { Input } from "./ui/input";
import BillingComponent from "./billing";
import DetailsComponent from "./details";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("billing");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const isActive = (tabName: string) => activeTab === tabName ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground";

  return (
    <div className="flex min-h-screen w-full">
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed z-30 m-4 left-0 top-14 md:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      )}
      <aside
        className={`fixed top-5 lg:top-0 left-0 z-20 flex h-full w-64 flex-col border-r bg-background transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between px-6 mt-10 lg:mt-0">
          <Link href="#" className="font-bold" prefetch={false}>
            Dashboard
          </Link>
          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="z-30 m-4 left-4 top-20 md:hidden"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <nav className="flex-1 space-y-1 px-4 py-6">
          <button
            onClick={() => setActiveTab("billing")}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${isActive("billing")}`}
          >
            <WalletIcon className="h-5 w-5" />
            Billing
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${isActive("details")}`}
          >
            <UserIcon className="h-5 w-5" />
            Details
          </button>
        </nav>
      </aside>
      <div className="flex-1 p-6 ">
        {activeTab === "billing" && <BillingComponent />}
        {activeTab === "details" && <DetailsComponent />}
      </div>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
