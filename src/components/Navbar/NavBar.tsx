import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useLocation, useNavigate  } from 'react-router-dom';
import { data } from '../../data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);

	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id:any) => {
		const element = document.getElementById(id);
          if(element){
		element.scrollIntoView({
			behavior: 'smooth',
        });
    }
	};

	const closeMobileMenu = (to:any, id:any) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					{/* <NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
						Red Rose
					</NavLogo> */}
					{/* <MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon> */}
					{/* <NavMenu show={show}>
						{data.map((el:any, index:any) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu> */}
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;