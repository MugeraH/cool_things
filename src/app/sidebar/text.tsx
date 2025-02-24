// import React from "react";
// import { ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SidebarItems } from "./sidebar-items";
// import Link from "next/link";

// const TitleSection = ({
//   open,
//   setOpen,
// }: {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   return (
//     <div className="pb-3 h-[100px] overflow-hidden relative rounded-b-xl">
//       <div className="flex cursor-pointer items-center justify-between rounded overflow-hidden transition-colors">
//         <div className="flex items-center gap-2">
//           <AnimatePresence>
//             {open && (
//               <motion.div
//                 initial={{ opacity: 0, width: 0 }}
//                 animate={{ opacity: 1, width: "auto" }}
//                 exit={{ opacity: 0, width: 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="">
//                   <img src="/img/sidebar-img.jpg" className="w-full h-full" />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//           <ToggleClose open={open} setOpen={setOpen} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const MotionLink = motion(Link);

// const NavOption = ({
//   Icon,
//   route,
//   routeName,
//   selected,
//   setSelected,
//   open,
//   notifs,
// }: {
//   Icon: React.JSX.Element;
//   route: string;
//   routeName: string;
//   selected: string;
//   setSelected: React.Dispatch<React.SetStateAction<string>>;
//   open: boolean;
//   notifs?: number;
// }) => {
//   return (
//     <MotionLink
//       href={route === "Dashboard" ? "/Admin" : route}
//       initial={false}
//       animate={{ opacity: 1 }}
//       className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
//         selected === routeName ? "font-semibold" : "font-normal"
//       }`}
//       onClick={() => setSelected(routeName)}
//     >
//       <div className="grid h-full w-10 place-content-center text-lg">
//         {Icon}
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.span
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "auto" }}
//             exit={{ opacity: 0, width: 0 }}
//             transition={{ duration: 0.2 }}
//             className="text-xs font-medium whitespace-nowrap overflow-hidden"
//           >
//             {routeName}
//           </motion.span>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {notifs && open && (
//           <motion.span
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             className="absolute right-2 top-1/2 -translate-y-1/2 size-4 rounded bg-indigo-500 text-[10px] text-white grid place-content-center"
//           >
//             {notifs}
//           </motion.span>
//         )}
//       </AnimatePresence>
//     </MotionLink>
//   );
// };

// const ToggleClose = ({
//   open,
//   setOpen,
// }: {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   return (
//     <button
//       onClick={() => setOpen((pv) => !pv)}
//       className="absolute right-0 bottom-0 transition-colors w-full"
//     >
//       <div
//         className={`flex ${
//           open ? "justify-end" : "justify-center"
//         } items-center p-2`}
//       >
//         <div className="grid size-7 rounded-full bg-red-600 place-content-center text-lg">
//           <ChevronRight
//             color="#fff"
//             size={18}
//             className={`transition-transform ${open ? "rotate-180" : ""}`}
//           />
//         </div>
//       </div>
//     </button>
//   );
// };

// function Sidebar() {
//   const [open, setOpen] = React.useState(false);
//   const [selected, setSelected] = React.useState("Dashboard");
//   const sidebarWidth = "240px";

//   return (
//     <motion.nav
//       initial={{ width: "70px" }}
//       animate={{ width: open ? sidebarWidth : "70px" }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className="sticky top-0 min-h-[calc(100vh-30px)] shrink-0 bg-[#A7A9AC] rounded text-white z-100"
//     >
//       <TitleSection open={open} setOpen={setOpen} />
//       <div className="space-y-1 py-3 px-2">
//         {SidebarItems.map((navitem) => (
//           <NavOption
//             key={navitem.route}
//             Icon={navitem.icon}
//             route={navitem.route}
//             routeName={navitem.routeName}
//             selected={selected}
//             setSelected={setSelected}
//             open={open}
//             // notifs={navitem.notifs}
//           />
//         ))}
//       </div>
//     </motion.nav>
//   );
// }

// export default Sidebar;
