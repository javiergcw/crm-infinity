"use client";

import React from 'react';
import Image from 'next/image';
import { ImagesPath } from '@/utils/images_path';

const menuItems = [
    { text: 'Ver perfil', href: '#', imgSrc: ImagesPath.onePeople },
    { text: 'Aliados', href: '#', imgSrc: ImagesPath.groupPeople },
    { text: 'PDS', href: '#', imgSrc: ImagesPath.gas },
];

const DropdownMenu = ({ onClose }) => (

 <div className="absolute right-0 z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-2 ring-ui-light-gray-300 ring-opacity-5 focus:outline-none animate-fade-in">
        <div className='mb-6'>
            {menuItems.map((item, index) => (
                <div key={index} className="py-1" role="none">
                    <a href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-x-2 px-4 py-2 small-normal-black hover:bg-gray-100" role="menuitem">
                        <Image src={item.imgSrc} alt={item.text} width={18} height={18} />
                        {item.text}
                    </a>
                </div>
            ))}
        </div>
        <div className="py-1" role="none">
            <a href="#" onClick={onClose} className="flex items-center gap-x-2 px-4 py-2 small-normal-red hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-6">
                <Image src={ImagesPath.logOut} alt="Delete" width={18} height={18} className="w-4 h-4 mr-1" />
                Cerrar sesión
            </a>
        </div>
    </div>

);

export default DropdownMenu;
