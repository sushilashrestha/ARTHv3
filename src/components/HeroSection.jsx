import { assets } from "../assets/assets"

const HeroSection = () => {
  return (
    <div className="relative w-full h-auto">
        <div className="flex flex-col items-start mt-10 lg:mt-20 text-[#003F5A] z-10 relative ">
            <h1 className="ml-44 text-4xl sm:text-6xl lg:text-9xl text-start tracking-wide">
                Explore, Solve And
                <span className="text-[#FF8700]">{" "}Win!</span>
            </h1>
            <h2 className="ml-44 text-3xl sm:text-5xl lg:text-[67px] text-start tracking-wide">
                <span className="text-[#008DC9]">The{" "}</span>
                Biggest Treasure Hunt 
                <span className="text-[#008DC9]">{" "}of Nepal is{" "}</span>
                Back<span className="text-[#008DC9]">.</span>
            </h2>
            <div className="ml-44 flex justify-center my-4 bg-opacity-0">
                <a href="#" className="bg-[#003F5A] text-white text-3xl py-3 px-4 rounded-lg">
                    Join The Adventure
                </a>
                <a href="#" className="text-[#003F5A] bg-white text-3xl py-3 px-4 mx-3 rounded-lg border-[3px] border-[#003F5A]">
                    Learn More
                </a>
            </div>
        </div>
        <div className="relative ">
            <img src={assets.Mountains} alt="mountains" className="w-full object-cover relative mt-[-120px]" />
            <img src={assets.Ground} alt="Ground" className="w-full object-cover relative lg:mt-[-144px] sm:mt-[-44px] z-50" />
        </div>
        <div className="flex justify-end">
            <img src={assets.Pik} alt="pik" className=" object-contain lg:mt-[-800px] z-40" />
        </div>
        <div className="flex justify-end">
            <img src={assets.cloudup} alt="cloudup" className="object-contain lg:mt-[-1500px]" />
        </div>
        <div className="justify-start">
            <img src={assets.clouddown} alt="clouddown" className="object-contain lg:mt-[-625px]" />
        </div>
        <div className="justify-between relative">
            <img src={assets.Temple} alt="Temple" className="w-40 h-40 object-contain pl-10 z-10 mt-[190px] ml-[360px]" />
        </div>
        <div className="flex relative justify-start">
            <img src={assets.TreeL1} alt="TreeL1" className="absolute object-contain w-36 h-36 lg:mt-[-160px] ml-60" />
            <img src={assets.TreeL2} alt="TreeL2" className="object-contain w-36 h-36 lg:mt-[-160px]  ml-40" />
            <img src={assets.TreeR} alt="TreeR" className="object-contain w-36 h-36 lg:mt-[-160px]  ml-56" />
        </div>
        <div className="flex relative justify-center">
            <img src={assets.Treasure} alt="Treasure" className="object-contain lg:mt-[-90px] ml-44 z-50" />
        </div>
    </div>
  )
}

export default HeroSection
