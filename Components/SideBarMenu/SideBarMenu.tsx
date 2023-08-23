"use client";
import { SideBarMenuType } from "@/types/SideBarMenuType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronDown, BiCog, BiHelpCircle } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";

function SideBarMenu() {
  const pathname = usePathname();

  const sidebarMenuList: SideBarMenuType[] = [
    {
      title: "Ledger Book",
      icon: (
        <>
          <FiBook size={20} />
        </>
      ),
      link: "/ledgerbook",
    },
    {
      title: "Credit Records",
      icon: (
        <>
          <MdOutlineAttachMoney size={20} />
        </>
      ),
      link: "/credit-record",
    },
  ];

  return (
    <div className="flex-col flex min-h-screen border-r text-neutral-700 min-w-[16rem]">
      {/* Logo */}
      <div className=" text-2xl  text-green-500 flex flex-row items-center p-4 gap-1">
        <FaBook />

        <span className="font-bold italic ">Zeeoro</span>
      </div>

      {/* Menu */}
      <div className="flex-col flex ">
        {sidebarMenuList.map((menuItem) => (
          <Link key={menuItem?.link} href={menuItem?.link}>
            <div
              className={`flex flex-row border-l-4 items-center px-4  gap-2 hover:bg-neutral-100/40 p-2 ${
                pathname === menuItem?.link
                  ? "text-green-500   border-green-500 bg-green-50"
                  : " border-white"
              }`}
            >
              {menuItem?.icon}
              <span>{menuItem?.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="my-auto" />

      <Link href={"/help"}>
        <div
          className={`flex flex-row items-center px-4 border-l-4  gap-2 hover:bg-neutral-100/40 p-2 ${
            pathname === "/help"
              ? "text-green-500   border-green-500 bg-green-50"
              : " border-white"
          }`}
        >
          <span>
            <BiHelpCircle size={20} />
          </span>
          {"Help"}
        </div>
      </Link>

      <Link href={"/settings"}>
        <div
          className={`flex flex-row items-center px-4 border-l-4 gap-2 hover:bg-neutral-100/40 p-2 ${
            pathname.includes("settings")
              ? "text-green-500   border-green-500 bg-green-50"
              : " border-white"
          }`}
        >
          <span>
            <BiCog size={20} />
          </span>
          {"Settings"}
        </div>
      </Link>
      {/* Selected Book */}
      <div className=" p-3 m-3 rounded-xl flex flex-row items-center bg-slate-100 justify-between">
        <div className="flex-col flex">
          <span className="text-xs">Selected book</span>
          <span>Personal Book</span>
        </div>
        <BiChevronDown size={20} />
      </div>
    </div>
  );
}

export default SideBarMenu;
