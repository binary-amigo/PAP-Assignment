import React from "react";
import Image from "next/image";
import logo1 from "../assets/clientLogos/Logo.svg";
import logo2 from "../assets/clientLogos/Logo(1).svg";
import logo3 from "../assets/clientLogos/Logo(2).svg";
import logo4 from "../assets/clientLogos/Logo(3).svg";
import logo5 from "../assets/clientLogos/Logo(4).svg";
import logo6 from "../assets/clientLogos/Logo(5).svg";
import logo7 from "../assets/clientLogos/Logo(6).svg";
import Icon from "../assets/mgmt/Icon.svg";
import Icon1 from "../assets/mgmt/Icon1.svg";
import Icon2 from "../assets/mgmt/Icon2.svg";
import Rafiki from "../assets/rafiki.svg";

const ClientPage = () => {
  return (
    <div className="h-auto px-40 py-8 ">
      <div className="text-center m-8">
        <h1 className="text-4xl text-[#4D4D4D] font-extrabold m-2">Our Clients</h1>
        <p className="text-md text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex justify-between px-10 py-8">
        <Image src={logo1} alt="client1" width={48} height={48} />
        <Image src={logo2} alt="client1" width={48} height={48} />
        <Image src={logo3} alt="client1" width={48} height={48} />
        <Image src={logo4} alt="client1" width={48} height={48} />
        <Image src={logo5} alt="client1" width={48} height={48} />
        <Image src={logo6} alt="client1" width={48} height={48} />
        <Image src={logo7} alt="client1" width={48} height={48} />
      </div>
      <div className="text-center m-8">
        <h1 className="text-4xl text-[#4D4D4D] font-extrabold m-2">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-md text-[#717171]">Who is Nextcent suitable for?</p>
      </div>
      <div className="flex text-center justify-between gap-10">
        <div className="rounded-lg w-[299px] shadow-sm hover:shadow-lg text-wrap px-6 py-2">
          <div className="px-6 ">
            <Image
              className="mx-auto m-4"
              src={Icon}
              alt="client1"
              width={65}
              height={56}
            />
            <h3 className="text-[#4d4d4d] text-[28px] font-extrabold pb-2">
              Membership Organisations
            </h3>
          </div>
          <p className="text-sm text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="rounded-lg w-[299px] shadow-sm hover:shadow-lg text-wrap px-6 py-2">
          <div className="px-6 ">
            <Image
              className="mx-auto m-4"
              src={Icon2}
              alt="client1"
              width={65}
              height={56}
            />
            <h3 className="text-[#4d4d4d] text-[28px] font-extrabold pb-2">National Associations</h3>
          </div>
          <p className="text-sm text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="rounded-lg w-[299px] shadow-sm hover:shadow-lg text-wrap px-6 py-2">
          <div className="px-6 ">
            <Image
              className="mx-auto m-4"
              src={Icon1}
              alt="client1"
              width={65}
              height={56}
            />
            <h3 className="text-[#4d4d4d] text-[28px] font-extrabold pb-2">Clubs And Groups</h3>
          </div>
          <p className="text-sm text-[#717171] ">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <Image
          src={Rafiki}
          alt="client1"
          width={441.53}
          height={328.99}
          className="my-16 mr-8 ml-32"
        />
        <div className="my-16 mr-32 ml-8">
          <div className="py-4">
            <div className="text-[36px] py-2 text-[#4D4D4D] font-extrabold">
              The unseen of spending three years at Pixelgrade
            </div>
            <p className="text-[14px] py-2 text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <button className="px-[32px] py-[14px] bg-[#4CAF4F] my-2 rounded-[2.78px] text-white hover:bg-[#66BB69]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
