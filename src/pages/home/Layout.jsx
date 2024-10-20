import React, { useContext, useEffect, useState } from "react";
import { InterestsContext } from "../../contexts/Interests";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Drawer } from "antd";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

function Layout() {
	const { selectedInterests } = useContext(InterestsContext);
	const navigate = useNavigate();

	const [drawerVisible, setDrawerVisible] = useState(false);

	useEffect(() => {
		console.log(selectedInterests);
	}, [selectedInterests]);

	const showDrawer = () => {
		setDrawerVisible(true);
	};

	const closeDrawer = () => {
		setDrawerVisible(false);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="bg-primary text-slate-700 p-4 shadow-md flex items-center justify-between">
				<div className="text-center font-bold text-xl">TurIA</div>
				<button
					onClick={showDrawer}
					className="text-2xl btn btn-ghost btn-sm"
				>
					<GiHamburgerMenu />
				</button>
			</nav>
			<Drawer
				title="Menu"
				placement="right"
				closable={true}
				width={"70%"}
				onClose={closeDrawer}
				open={drawerVisible}
			>
				<div className="flex flex-col text-center text-xs pb-8 pt-4">
					<p className="font-bold ">Angel Jesus Zorrilla Cuevas</p>
					<p className="text-xs opacity-70 ">angel@gmail.com</p>
				</div>
				<NavLink to={"/onboarding"}>
					<Button block type="text" icon={<MdOutlinePermDataSetting />}>
						Onboarding
					</Button>
				</NavLink>
				<NavLink to={"/home/settings"}>
					<Button block type="text" icon={<IoMdSettings />}>
						Settings
					</Button>
				</NavLink>
				<NavLink to={"/logout"}>
					<Button block type="text" danger icon={<IoLogOut />}>
						Logout
					</Button>
				</NavLink>
			</Drawer>

			{/* Main content */}
			<div className="flex-1 p-4">
				<Outlet />
			</div>

			{/* Bottom bar */}
			<div className="btm-nav">
				<NavLink
					to={"/home/map"}
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdPlace />
				</NavLink>
				<NavLink
					to={"/home"}
					end
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<TiHome />
				</NavLink>
				<NavLink
					to={"/home/search"}
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<IoSearchSharp />
				</NavLink>
			</div>
		</div>
	);
}

export default Layout;
