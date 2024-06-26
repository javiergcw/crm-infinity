import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import LayoutWallet from '@/features/wallet/components/layout_wallet';
import ComeBack from '@/components/come_back';
import TitleContract from '@/features/wallet/components/tlite/title_contract';
import CardContract from '@/features/wallet/components/card/card_contract';
import '../app/globals.css'
import DownCardHorizontal from '@/features/wallet/components/card/down_card_horizontal';
import TopCardHorizontal from '@/features/wallet/components/card/top_card_horizontal';
import SectionMenuWallet from '@/features/wallet/components/section/section_menu_wallet';
import ViewAllWallet from '@/features/wallet/components/section/all_wallet/view-all-wallet';
import ViewCurrentWallet from '@/features/wallet/components/section/current_wallet/view-current-wallet';
import ViewVolumenBuy from '@/features/wallet/components/section/volumen_buy/view-volumen-buy';


const Cartera = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const contractDatas = [
        {
            contractNumber: 'CS-22-251',
            validity: '10 AÑOS',
            startDate: '01/05/22',
            endDate: '01/06/23',
            agreedVolume: '44.084.000',
            purchasedGallons: '3.068.488',
            averageSales: 'N/A',
            monthlyBonus: '150 X GL',
            anti: 'N/A',
            lastintervention: 'N/A',
            warranty: 'N/A',
            invested: 'N/A',
        },
        {
            contractNumber: 'CS-22-201',
            validity: '10 AÑOS',
            startDate: '01/05/22',
            endDate: '01/06/23',
            agreedVolume: '44.084.000',
            purchasedGallons: '3.068.488',
            averageSales: 'N/A',
            monthlyBonus: '150 X GL',
            anti: 'N/A',
            lastintervention: 'N/A',
            warranty: 'N/A',
            invested: 'N/A',
        },
        {
            contractNumber: 'CS-22-203',
            validity: '10 AÑOS',
            startDate: '01/05/22',
            endDate: '01/06/23',
            agreedVolume: '44.084.000',
            purchasedGallons: '3.068.488',
            averageSales: 'N/A',
            monthlyBonus: '150 X GL',
            anti: 'N/A',
            lastintervention: 'N/A',
            warranty: 'N/A',
            invested: 'N/A',
        },
    ];

    const toggleExpanded = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  // Esto permitirá expandir o colapsar el ítem clickeado
    };

    return (
        <>
            <Navbar />
            <LayoutWallet
                contentOne={
                    <div className=" w-full h-910 bg-white border-ui-light-gray-300">
                        <ComeBack />
                        <TitleContract containerText="3 CONTRATOS" />
                        <div className='h-full overflow-y-auto'>
                            {contractDatas.map((contractData, index) => (
                                <div onClick={(e) => {
                                    e.stopPropagation(); // Previene la propagación del evento al contenedor
                                    toggleExpanded(index);
                                }}>
                                    <CardContract
                                        key={index}
                                        contractData={contractData}
                                        expanded={activeIndex === index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                contentTwo={
                    <div className="w-full h-full bg-white rounded-xl border-2 border-ui-gray-line  pt-2 grid"
                        style={{ gridTemplateRows: '20% 5% 65% 10%' }}>
                        <div className=" flex items-center justify-center h-full">
                            <TopCardHorizontal />
                        </div>
                        <div className="border-t-2 border-b-2 border-ui-gray-line flex items-center justify-center h-full">
                            <SectionMenuWallet />
                        </div>
                        <div className="flex px-4 py-5 h-full w-full">


                           {/*  <ViewVolumenBuy /> */}
                            {/* <ViewCurrentWallet /> */}
                           {/*  <ViewAllWallet /> */}
                        </div>
                        <div className=" justify-center h-full">
                            <DownCardHorizontal />
                        </div>
                    </div>
                }
            />
        </>
    );
};

export default Cartera;
