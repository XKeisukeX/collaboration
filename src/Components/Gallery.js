export default function Gallery() {
    return (
        <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <h2 className="text-center text-2xl font-bold text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className='w-full h-full object-cover rounded' src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded' src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded' src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded' src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover rounded' src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    )
}