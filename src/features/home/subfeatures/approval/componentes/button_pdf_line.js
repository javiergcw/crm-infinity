import React from 'react';
import PropTypes from 'prop-types';

const ButtonPdfLine = ({ loadingDate, text }) => {
    return (
        <div className='my-5'>
            <h4 className='small-gray-two'>
                Fecha de carga: {loadingDate}
            </h4>
            <div className="flex flex-row items-center cursor-pointer">
                <p className="small-normal-black underline">
                    {text}
                </p>
                <svg data-slot="icon" className='mx-2 w-5 h-5' fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                </svg>
            </div>
        </div>
    );
};

ButtonPdfLine.propTypes = {
    loadingDate: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ButtonPdfLine;
