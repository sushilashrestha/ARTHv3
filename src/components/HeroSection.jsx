import { assets } from "../assets/assets"

const PixelImage = ({ src, alt, className, style }) => (
    <div className={`absolute ${className}`} style={style}>
      <img src={src} alt={alt} className="w-full h-full object-cover" style={{ imageRendering: 'pixelated' }}/>
    </div>
  );

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden py-11">
        <div className="container mx-auto px-14 pt-10 text-[#003F5A] z-10 relative ">
            <h1 className="text-4xl sm:text-6xl lg:text-9xl text-start tracking-wide mb-2">
                Explore, Solve And
                <span className="text-[#FF8700]">{" "}Win!</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-7xl mb-2 tracking-normal">
                <span className="text-[#008DC9]">The{" "}</span>
                Biggest Treasure Hunt 
                <span className="text-[#008DC9]">{" "}of Nepal is{" "}</span>
                Back<span className="text-[#008DC9]">.</span>
            </h2>
            <div className="flex gap-4 mb-10">
                <a href="#" className="bg-[#003F5A] text-white sm:text-2xl lg:text-3xl py-3 px-4 rounded-lg hover:bg-[#002a3d] transition-colors">
                    Join The Adventure
                </a>
                <a href="#" className="text-[#003F5A] bg-white sm:text-2xl lg:text-3xl py-3 px-4 mx-3 rounded-lg border-[3px] border-[#003F5A] hover:bg-[#f0f0f0] transition-colors">
                    Learn More
                </a>
            </div>
        </div>
        <PixelImage src={assets.Mountains} alt="mountains" className="bottom-[8%] left-0 w-full" style={{height:'60%'}} />
        <PixelImage src={assets.Ground} alt="Ground" className="top-[80%] left-0 w-full z-50" style={{height:'15%'}} />
        <PixelImage src={assets.Pik} alt="pik" className=" right-0 bottom-[17%]" style={{width:'auto', height:'60%'}} />
        <PixelImage src={assets.cloudup} alt="cloudup" className="right-0 top-7" style={{width:'auto', height:'18%'}}/>
        <PixelImage src={assets.clouddown} alt="clouddown" className="left-0 top-64" style={{width:'auto', height:'18%'}} />
        <PixelImage src={assets.Temple} alt="Temple" className="left-[20.5%] bottom-[19%] hidden md:block lg:block" style={{width:'auto', height:'15%'}} />
        <PixelImage src={assets.TreeL1} alt="TreeL1" className="left-[10%] bottom-[18%] hidden md:block lg:block" style={{width:'auto', height:'15%'}}/>
        <PixelImage src={assets.TreeL2} alt="TreeL2" className="left-[14%] bottom-[18%] hidden md:block lg:block" style={{width:'auto', height:'15%'}} />
        <PixelImage src={assets.TreeR} alt="TreeR" className="left-[29%] bottom-[18%] hidden md:block lg:block" style={{width:'auto', height:'15%'}}/>
        <PixelImage src={assets.Treasure} alt="Treasure" className="left-[51%] bottom-[18%] hidden md:block lg:block z-50" style={{width:'auto', height:'5%'}} />
    </div>
  )
}

export default HeroSection
