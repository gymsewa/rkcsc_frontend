import React from 'react'

const HeroSection = ({}) => {
  return (
    <>
      <div className="min-h-screen bg-white bg-[url('https://www.shutterstock.com/image-photo/smart-female-programer-working-on-600nw-1590824860.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-white/50">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-[#000080] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  WELCOME TO RK COMMON SERVICE CENTER
                </h1>
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                  We excel at ensuring flawless completion of all type of
                  Documents, Certificates & various other online applications,
                  guaranteeing a 100% accuracy everytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button class="group relative inline-block overflow-hidden rounded border-4 border-double border-grey-500 px-8 py-3 font-medium text-black-600">
                    <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-blue-800 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span class="relative group-hover:text-white">
                      Explore Our Services
                    </span>
                  </button>
                  <button class="group relative inline-block overflow-hidden rounded border-4 border-double border-grey-500 px-8 py-3 font-medium text-black-600">
                    <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-blue-800 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span class="relative group-hover:text-white">
                      Why Choose Us ?
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;