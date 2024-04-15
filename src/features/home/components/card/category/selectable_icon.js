const SelectableIcon = ({ icon, text, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col justify-center px-4 py-3 rounded-lg shadow-md border border-ui-light-gray-300 cursor-pointer m-2 
                    ${isSelected ? 'bg-ui-blue-400' : 'bg-white'} transition-colors`}
            style={{ minWidth: '120px' }}
        >
            {icon}
            <span className="mt-5 text-sm">{text}</span>
        </div>
    );
};

export default SelectableIcon;
