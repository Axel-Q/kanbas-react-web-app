import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SlChemistry } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom"
import { LiaCogSolid } from "react-icons/lia";
import './index.css';
import { Route } from "react-router-dom";


export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "Labs", path: "/Labs", icon: LiaCogSolid },
    ];


    return (
        <div id="wd-kanbas navigation" className="list-group rounded-0">
            <a id="wd-neu-link" target="=_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0">
                <img src="images/NEU.png" alt="Northeastern University" className="neu-logo" />
            </a>
            <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                <br />
                Account
            </Link>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger" })}
                    <br />
                    {link.label}
                </Link>
            ))}
            {/* <a id='wd-account-link' href="#/Kanbas/Account"
                className="list-group-item text-white
                    bg-black text-center border-0 ">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account </a>
            <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
                className="list-group-item text-center border-0
                   bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard </a>
            <a id="wd-course-link" href="#/Kanbas/Courses"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses </a>
            <a id='wd-calendar-link' href="#/Kanbas/Calendar"
                className="list-group-item text-white bg-black text-center border-0">
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar </a>
            <a id='wd-inbox-link' href="#/Kanbas/Inbox"
                className="list-group-item text-white bg-black text-center border-0">
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox </a>
            <a id="wd-labs-link" href="#/Labs"
                className="list-group-item text-white bg-black text-center border-0">
                <SlChemistry className="fs-1 text-danger" /><br />
                Labs </a> */}
        </div>
    );
}

