import { useState } from 'react'

import { Squash as Hamburger } from 'hamburger-react'
import content from '../content';

const DropDown = (props) => {





    const [isOpen, setOpen] = useState(false)

    function closeMenu() {
        setOpen(false)
        document.getElementById("myDropdown").classList.add("hidden");
    }

    return (
        <div className="relative md:hidden inline-block text-left ">
            <div className="hover:bg-light-blue/25 rounded-lg">

                <Hamburger toggled={isOpen} easing="ease-in" toggle={setOpen} hideOutline={true} onToggle={(toggled, e) => {
                    if (toggled) {
                        document.getElementById("myDropdown").classList.remove("hidden");
                    } else {
                        document.getElementById("myDropdown").classList.add("hidden");
                    }

                }} />

                <div id="myDropdown" className="origin-top-right  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-black ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" onClick={closeMenu}>
                    <div className="py-1 text-xl"   >


                        <p style={{ cursor: 'pointer' }} className="  block px-4 py-2 text-base hover:bg-black/25" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => props.setCurrentPage('about')}>{content.nav.links[0].text}</p>



                        <p style={{ cursor: 'pointer' }} className="  block px-4 py-2 text-base hover:bg-black/25" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => props.setCurrentPage('project')}>{content.nav.links[1].text}</p>


                        <p style={{ cursor: 'pointer' }} className="  block px-4 py-2 text-base hover:bg-black/25" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => props.setCurrentPage('resume')}>{content.nav.links[2].text}</p>


                        <p style={{ cursor: 'pointer' }} className=" hover:bg-light-blue/25 block px-4 py-2 text-base" role="menuitem" tabindex="-1" id="menu-item-1" onClick={() => props.setCurrentPage('contact')}>{content.nav.links[3].text}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown