"use client";
import { useEffect } from 'react';
import Navbar from "@/components/navbar";
import LayoutHome from "@/features/home/components/layout_home";
import Filters from '@/features/home/components/filters';
import TableSection from '@/features/home/components/table/table_section';
import { StationProvider } from '../features/home/hooks/station_context';
import StationDetail from "@/features/home/components/section/station_detail";
import { registerLicense } from '@syncfusion/ej2-base';

export default function Home() {
  useEffect(() => {
    // Reemplaza 'YOUR-LICENSE-KEY' con tu clave de licencia real
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x3QHxbf1x0ZFBMYVVbQH5PMyBoS35RckVnWHpedXVcQmlcU0Fy');
  }, []);
  return (
    <StationProvider>
      <Navbar />
      <LayoutHome
        isDivided={false}
        contentOne={
          <div className="w-full h-full bg-white rounded-xl border border-ui-blue-100 px-3 pt-7">
            <Filters />
            <TableSection />
          </div>
        }
        contentTwo={
          <div className="w-full h-full bg-white rounded-xl border border-ui-light-gray-300">
            <StationDetail />
          </div>
        }
        contentThree={
          <div className="w-full h-full bg-white rounded-xl border border-ui-light-gray-300">
          </div>
        }
      />
    </StationProvider>
  );
}