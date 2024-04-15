"use client";
import React, { useState } from 'react';
import Navbar from "@/components/navbar";
import LayoutHome from "@/features/home/components/layout_home";
import Filters from '@/features/home/components/filters';


export default function Home() {
  // Estado para controlar si el layout está dividido o no
  const [isDivided, setIsDivided] = useState(false);

  // Función para cambiar el estado de isDivided
  const toggleIsDivided = () => {
    setIsDivided(!isDivided);
  };
  return (
    < >
      {/* <button
        onClick={toggleIsDivided}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Cambiar Layout
      </button>
 */}
      <Navbar />

      <LayoutHome
        isDivided={isDivided}
        contentOne={
          <div className="w-full h-full bg-white rounded-xl border border-ui-blue-100 px-3 pt-7">
            <Filters/>
          </div>
        }
        contentTwo={
          <div className="w-full h-full bg-white rounded-xl border border-ui-light-gray-300">
          </div>
        }
        contentThree={
          <div className="w-full h-full bg-white rounded-xl border border-ui-light-gray-300">
          </div>
        }
      />
    </ >
  );
}