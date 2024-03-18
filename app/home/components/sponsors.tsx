import React from "react";
import Image from "next/image";

const SponsorPage = () => {
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="text-center">
            <h1 className="text-lg font-medium leading-6 text-black uppercase within 500 fortune companies">
              Trusted by companies worldwide
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6 pt-6">
            <div className="flex justify-center col-span-1 px-8">
              <Image className="max-h-12" src="/project1.png" alt="logo" height={12} />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image className="max-h-12" src="/project1.png" alt="logo" height={12} />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image className="max-h-12" src="/project1.png" alt="logo" height={12} />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image className="max-h-12" src="/project1.png" alt="logo" height={12} />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image className="max-h-12" src="/project1.png" alt="logo" height={12} />
            </div>
            <div className="flex justify-center col-span-1 px-8">
              <Image className="max-h-12" src="/project1.png" alt="logo" height={12} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorPage;
