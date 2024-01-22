export default function Home() {
    return (
        <div className="w-full h-[90vh]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute md:top-[35%] top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <h2 className="md:text-5xl text-3xl font-bold capitalize">Connected Creations</h2>
                    <h2 className="md:text-5xl text-3xl italic font-bold capitalize md:py-2 py-1">Collaborative Hub</h2>
                    <p className="mt-3">Join our vibrant Collaborative Hub, where creators unite! Explore synergies, spark ideas, and bring visions to life. Connect, collaborate, and unleash the power of collective creativity.</p>
                </div>
            </div>
        </div>
    )
}