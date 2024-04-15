"use client";

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { ImagesPath } from '@/utils/images_path';
import DropdownMenu from '../menu/dropdown_menu'; // Nuevo componente para el menú

const UserContainer = ({ name, role, imageUrl }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="cursor-pointer relative inline-block text-left" ref={toggleRef}>
            <div onClick={toggleMenu} className="flex items-center bg-white py-4 pl-4 border-l-2 border-ui-light-gray-300 h-10 cursor-pointer">
                <Image src={ImagesPath.verticalDots} alt="Settings icon" width={20} height={20} className="w-5 h-5 object-contain" />
                <div className="flex-grow mx-4 text-right">
                    <div className="p-bold-gray">{name}</div>
                    <div className="s1-medium-gray">{role}</div>
                </div>
                <div className="flex-shrink-0">
                    <div className="rounded-full bg-ui-blue-800 p-1">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <img src={imageUrl} alt="Profile image" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && <DropdownMenu onClose={() => setIsMenuOpen(false)} />}
        </div>
    );
};

UserContainer.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default UserContainer;
