export default function Contact() {
    return (
        <div id="contacts" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <div className="text-center">
                <h2 className="text-2xl font-bold capitalize text-gray-700">send us a message</h2>
                <p className="py-2 text-gray-700 font-medium">We're standing by!</p>
            </div>
            <div className="grid md:grid-cols-2">
                <img className="w-full md:h-full object-cover h-[200px] rounded p-2 max-h-[500px]" src="https://images.pexels.com/photos/3471029/pexels-photo-3471029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <form>
                    <div className="grid grid-cols-2">
                        <input className="border m-2 p-2" type="text" placeholder="First Name" />
                        <input className="border m-2 p-2" type="text" placeholder="Last Name" />
                        <input className="border m-2 p-2" type="text" placeholder="Email" />
                        <input className="border m-2 p-2" type="text" placeholder="Phone" />
                        <input className="border col-span-2 p-2 m-2" type="text" placeholder="Address" />
                        <textarea className="border col-span-2 p-2 m-2" cols="30" rows="10"></textarea>
                        <button className="btn col-span-2 m-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}