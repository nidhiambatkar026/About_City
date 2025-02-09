import bgimage from "./images/banner.jpg";

export default function HeroSection() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img 
                src={bgimage}
                alt="Background Image" 
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div 
                    className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
                ></div>
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div 
                    className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
                ></div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Welcome to Nagpur!
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Explore the heart of India, where rich heritage meets modern charm.
                    From the serene Ambazari Lake to the bustling markets, Nagpur has something for everyone.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300"> Historic Landmarks</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">12</dd>
                        </div>
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">Educational Institutions</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">300+</dd>
                        </div>
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">Parks & Gardens</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">40</dd>
                        </div>
                        <div className="flex flex-col-reverse gap-1">
                            <dt className="text-base/7 text-gray-300">Opportunities & Growth</dt>
                            <dd className="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
