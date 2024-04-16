"use client";
import { useEffect } from 'react';
import Navbar from "@/components/navbar";
import LayoutHome from "@/features/home/components/layout_home";
import Filters from '@/features/home/components/filters';
import TableSection from '@/features/home/components/table/table_section';
import { StationProvider } from '../features/home/hooks/station_context';
import StationDetail from "@/features/home/subfeatures/station_detail/station_detail";
import { registerLicense } from '@syncfusion/ej2-base';
import ApprovalDetail from '@/features/home/subfeatures/approval/approval_detail';
import InvestmentDetail from '@/features/home/subfeatures/investment/investment_detail';
import WarrantyDetail from '@/features/home/subfeatures/warranty/warranty_detail';

export default function Home() {

  useEffect(() => {
    // Reemplaza 'YOUR-LICENSE-KEY' con tu clave de licencia real
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x3QHxbf1x0ZFBMYVVbQH5PMyBoS35RckVnWHpedXVcQmlcU0Fy');
  }, []);
  return (
    <StationProvider>
      <Navbar />
      <LayoutHome
        isDivided={true}
        contentOne={
          <div className="w-full h-full bg-white rounded-xl border border-ui-blue-100 px-3 pt-7">
            <Filters viewClean={true} />
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
            {/* <InvestmentDetail /> */}
            { <WarrantyDetail />}
            {/* <ApprovalDetail /> */}
          </div>
        }
      />
    </StationProvider>
  );
}