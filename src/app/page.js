"use client";
import Navbar from "@/components/navbar";
import LayoutHome from "@/features/home/components/layout_home";
import Filters from '@/features/home/components/filters';
import TableSection from '@/features/home/components/table/table_section';
import { StationProvider } from '../features/home/hooks/station_context';
import StationDetail from "@/features/home/components/section/station_detail";

export default function Home() {

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