export default function Booking() {
    return (
        <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
            <form className="lg:flex lg:justify-between w-full items-center">
                <div className="flex flex-col my-2 py-2">
                    <label className="pb-2 font-medium">InnoHub</label>
                    <select className="lg:w-[300px] md:w-full border rounded-md p-2">
                        <option>InnoHub Center for Innovation</option>
                        <option>Creative Nexus Hub</option>
                        <option>Tech Innovate Hub</option>
                        <option>FutureForge Collaboration Hub</option>
                    </select>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px] m-auto my-2 p-2">
                        <label className="pb-2 font-medium">Collaborate</label>
                        <input type="date" className="border py-2 rounded-md" />
                    </div>
                    <div className="flex flex-col w-full lg:max-w-[250px] m-auto my-2 p-2">
                        <label className="pb-2 font-medium">Disconnect</label>
                        <input type="date" className="border py-2 rounded-md" />
                    </div>
                </div>
                <div  className="flex flex-col w-full my-2 p-2">
                    <label className="pb-2 font-medium">Search</label>
                    <button className="btn w-full">Rates & Availability</button>
                </div>
            </form>
        </div>
    )
}