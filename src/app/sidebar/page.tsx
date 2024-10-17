"use client";
import React from "react";
import {
  ChevronDown,
  LucideIcon,
  Apple,
  Anchor,
  Atom,
  PanelsTopLeft,
  ChevronsRight,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

const Sidepanel = () => {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState("View site");
  return (
    <motion.nav
      layout
      className="sticky top-0 h-[90vh] shrink-0 border-r border-slate-300 bg-white p-2 "
      style={{ width: open ? "225px" : "fit-content" }}
    >
      {" "}
      <TitleSection open={open} />
      <div className="space-y-1">
        <Option
          Icon={Apple}
          title="View site"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={Anchor}
          title="Sales"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={Atom}
          title="Products"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />

        <Option
          Icon={PanelsTopLeft}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={Users}
          title="People"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>
      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({
  Icon,
  title,
  selected,
  setSelected,
  open,
  notifs,
}: {
  Icon: LucideIcon;
  title: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  notifs?: number;
}) => {
  return (
    <motion.button
      layout
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
      onClick={() => setSelected(title)}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>

      {open && (
        <motion.span layout className="text-xs font-medium">
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          layout
          style={{ transform: "translateY(-50%)" }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-[10px] text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <motion.div layout className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <div>
              <motion.span
                layout
                className="block text-xs font-semibold text-black"
              >
                GirlOnFire
              </motion.span>
              <motion.span layout className="block text-xs text-slate-500">
                Pro Plane
              </motion.span>
            </div>
          )}
        </div>

        {open && <ChevronDown color="#000" size={15} className="mr-2" />}
      </div>
    </motion.div>
  );
};

const Logo = () => {
  return (
    <div className="grid size-10 shrink-0 place-content-center rounded-md shadow-lg">
      <svg
        id="logo-35"
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          className="ccompli1"
          fill="#007AFF"
        ></path>{" "}
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          className="ccustom"
          fill="#312ECB"
        ></path>{" "}
      </svg>
    </div>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <ChevronsRight
            color="#000"
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <span className="text-xs font-medium text-slate-400">Hide</span>
        )}
      </div>
    </motion.button>
  );
};

const Mainpanel = () => <div className="    w-full">Main</div>;

function Sidebar({}: Props) {
  // h-[80vh] w-full bg-green-200
  return (
    <div
      className="flex 
  
    rounded-sm overflow-hidden border border-slate-800"
    >
      <Sidepanel />
      <Mainpanel />
    </div>
  );
}

export default Sidebar;
