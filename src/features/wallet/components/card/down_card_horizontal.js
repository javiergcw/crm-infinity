import React from 'react';
import TitleSum from '../tlite/title_sum';

const DownCardHorizontal = () => {
  return (
    <div className="flex mx-10 h-full rounded-t-xl border-t-2 border-x-2 border-ui-gray-line">
      <div className="flex items-center justify-center " style={{ width: '25%' }}>
        <TitleSum title="Cartera corriente" subtitle="967.084.207" all={false} />
      </div>
      <div className="flex items-center " style={{ width: '15%' }}>
        <TitleSum title="Cartera largo plazo" subtitle="1.622.170.429" all={false} />
      </div>
      <div className="flex items-center " style={{ width: '30%' }}>

      </div>
      <div className="flex items-center justify-center" style={{ width: '30%' }}>
        <TitleSum title="Total cartera cliente" subtitle="2.589.254.636" all={true} />
      </div>

    </div>
  );
};

export default DownCardHorizontal;
