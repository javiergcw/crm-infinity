import { useState } from 'react';
import SelectableIcon from './selectable_icon';

const ScrollableIconRow = ({ items }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (
        <div className="flex overflow-x-auto w-full hide-scrollbar ">
            {items.map((item, index) => (
                <SelectableIcon
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    isSelected={selected === item.text}
                    onClick={() => handleSelect(item.text)}
                />
            ))}
        </div>
    );
};

export default ScrollableIconRow;
