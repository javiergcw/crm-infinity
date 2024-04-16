import ButtonStandard from '@/components/buttons/standart_button';
import React from 'react';

const CustomTable = ({ data }) => {
    return (
        <div className="overflow-x-auto h-full ">



            <table className="w-full text-left border-collapse">
                <thead className="bg-ui-blue-500">
                    <tr>
                        {data.headers.map((header, index) => (
                            <th
                                key={index}
                                className={`px-4 py-2 border-b-2 border-r-2 border-ui-blue-500 ${index === 0 ? '' : ''} ${index === data.headers.length - 1 ? '' : ''}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index} className={index === data.rows.length - 1 ? "bg-ui-blue-500" : "border-b border-ui-blue-500"}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-4 py-2 ${cellIndex === 0 ? 'border-l-2 border-ui-blue-500' : ''} ${cellIndex === row.length - 1 ? 'border-r-2 border-ui-blue-500' : ''}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
