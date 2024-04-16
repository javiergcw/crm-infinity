import React from 'react';
import ContainerContractText from '../container/container_client_text';
import ContainerMainText from '../container/container_main_text';
import ContainerStatusText from '../container/container_status_text';
import ContainerRectangleText from '../container/container_rectangle_text';

const TopCardHorizontal = () => {
    return (
        <div className="w-full h-full flex flex-col ">
            <div className="flex-1 flex">
                <div className="grid grid-cols-7 w-full">
                    <div className="col-span-2  ">
                        <ContainerContractText clientValue={"Grupo Administrativo Kamel S.A.S"} />
                    </div>
                    <div className="">
                        <ContainerMainText
                            title="Grupo familiar"
                            value="Kamel Group"
                            groupFamily={true}
                        />
                    </div>
                    <div className="">
                        <ContainerStatusText
                            title="Estado de venta"
                            status="ACTIVO"
                        />
                    </div>
                    <div className="">
                        <ContainerRectangleText
                            title="EDS"
                            value="9 EDS"
                        />
                    </div>
                    <div className="">
                        <ContainerRectangleText
                            title="Ciudad"
                            value="7 Ciudades"
                        />
                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="flex-1 flex ">
                <div className="grid grid-cols-7 w-full">
                    <div className="">
                        <ContainerMainText
                            title="Departamento"
                            value="N de Santander"
                            groupFamily={false}
                        />
                    </div>
                    <div className="">
                        <ContainerMainText
                            title="Dirección"
                            value="Cra 10A No. 70-20"
                            groupFamily={false}
                        />
                    </div>
                    <div className="">
                        <ContainerMainText
                            title="Representante Legal"
                            value="Sandra Milena Mejía Díaz"
                            groupFamily={false}
                        />
                    </div>
                    <div className="">
                        <ContainerMainText
                            title="Analista de cartera"
                            value="Monica Bolaños"
                            groupFamily={false}
                        />
                    </div>
                    <div className="">
                        <ContainerMainText
                            title="Asesor comercial"
                            value="Yamil Egel"
                            groupFamily={false}
                        />
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
};

export default TopCardHorizontal;
