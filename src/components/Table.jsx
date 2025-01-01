import React from 'react'
import { COMPETITION_LIST } from '../utils/helper'

const Table = () => {
    return (
        <>
            <div className='bg-[#191423] flex items-center justify-center py-16 max-md:py-10'>
                <div className='container'>
                    <div className='flex items-center max-lg:flex-wrap justify-center gap-10'>
                        <div className='max-w-[482px] w-full'>
                            <h1 className='text-white text-[48px] pb-[50px]'>Competition</h1>
                            <p className='text-white font-normal'>Given our best in class offering, we need to cut through by opting for penetration pricing.</p>
                            <p className='text-white font-normal pt-2'>This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.</p>
                            <p className='text-white font-normal pt-2'>The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.</p>
                            <p className='text-white font-normal pt-2'>As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.</p>
                        </div>
                        <div className="bg-[#026070] max-w-[580px] flex items-center justify-center py-[52px] rounded-xl max-lg:overflow-hidden w-full pe-5 ps-4 max-sm:p-5">
                            <div className="flex items-center w-full max-w-[554px] max-lg:max-w-[554px] max-lg:!overflow-x-auto ">
                                <div>
                                    <div className="flex gap-2">
                                        <div className="text-center bg-transparent w-[95px] "></div>
                                        <div className="text-center bg-white font-semibold max-sm:w-[85px] w-[95px] pt-6 pb-5 rounded-t-lg ms-[23px] max-sm:ms-[3px]">Rift</div>
                                        <div className="text-center bg-white font-semibold max-sm:w-[85px] w-[95px] pt-6 pb-5 rounded-t-lg">Taxscouts</div>
                                        <div className="text-center bg-white font-semibold max-sm:w-[85px] w-[95px] pt-6 pb-5 rounded-t-lg">Coconut</div>
                                        <div className="text-center font-semibold bg-lightGreen w-[95px] max-sm:w-[85px] pt-6 pb-5 rounded-t-lg bg-[#56E3CB]">Pie</div>
                                    </div>
                                    <div className="!overflow-x-auto max-w-full">
                                        <div className="max-lg:max-w-[554px]">
                                            {COMPETITION_LIST.map((obj, i) => (
                                                <div key={i} className="flex gap-2  border-t border-black">
                                                    <div className={`ps-2 font-semibold  text-white border-black py-4 w-[95px] max-sm:w-[75px] ${i === 0 ? 'me-[23px] text-sm' :'me-[23px] text-sm'}`}>{obj.brand}</div>
                                                    <div className={`text-center ${i === 5 ? 'rounded-b-lg text-[13px] font-normal h-[107px]' : ''} py-4 flex bg-white items-center justify-center max-sm:w-[85px] w-[95px]`}>{obj.rift}</div>
                                                    <div className={`text-center ${i === 5 ? 'rounded-b-lg text-[13px] font-normal h-[107px]' : ''} py-4 bg-white flex items-center justify-center max-sm:w-[85px] w-[95px]`}>{obj.taxscout}</div>
                                                    <div className={`text-center ${i === 5 ? 'rounded-b-lg text-[13px] font-normal h-[107px]' : ''} py-4 bg-white flex items-center justify-center max-sm:w-[85px] w-[95px]`}>{obj.coconut}</div>
                                                    <div className={`text-center ${i === 5 ? 'rounded-b-lg text-[13px] font-normal h-[107px]' : ''} bg-lightGreen py-4 flex items-center justify-center bg-[#56E3CB] max-sm:w-[85px] w-[95px]`}>{obj.pie}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
