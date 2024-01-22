import { PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function Topbar() {

    return (
        <>  

            <div className='flex justify-between items-center px-4 py-2'>
                <div>
                    <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_b53e305456d7946153987dc7c2031daa/collab-hub.png" alt="" className="w-24 h-10" />
                </div>
                <div className='flex items-center'>
                    <div className='hidden md:flex items-center px-6'>
                        <ClockIcon className='w-4 h-4 text-gray-500 mr-2' />
                        <p className='text-sm font-medium'>8am - 5pm</p>
                    </div>
                    <div className='hidden md:flex items-center px-6'>
                        <PhoneIcon  className='w-4 h-4 text-gray-500 mr-2' />
                        <p className='text-sm font-medium'>09-6643-65352</p>
                    </div>
                    <button className='btn'>get a free trial</button>
                </div>
            </div>

        </>
    )
}