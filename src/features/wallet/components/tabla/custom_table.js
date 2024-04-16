import React from 'react';

const CustomTable = ({ data }) => {
    return (
        <div className="overflow-x-auto h-full">
            <table className="min-w-full text-sm md:text-base">
                <thead className="bg-ui-blue-500 text-xs md:text-sm">
                    <tr>
                        {data.headers.map((header, index) => (
                            <th
                                key={index}
                                className={`px-2 md:px-4 py-1 md:py-2 border-b-2 border-r-2 border-ui-blue-500 ${index === 0 ? '' : ''} ${index === data.headers.length - 1 ? '' : ''}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-ui-gray-50"}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-2 md:px-4 py-1 md:py-2 ${cellIndex === 0 ? 'border-l-2 border-ui-blue-500' : ''} ${cellIndex === row.length - 1 ? 'border-r-2 border-ui-blue-500' : ''}`}
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
