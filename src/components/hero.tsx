"use client";
import React from "react";




function Hero(
  
) {
  return (
    <div
      className=" flex   min-h-[670px]  bg-cover bg-center  bg-blend-overlay bg-no-repeat flex-col items-center justify-between p-24 relative"
      style={{
        backgroundImage: 'url("/img/hero-image.jpg")',
        height: "400px",
        opacity: "0.9",
        zIndex: "100",
      }}
    >
      {/* Green overlay */}
      {/* <div className="absolute inset-0 bg-[#040c09] bg-opacity-50" />{" "} */}
      <div className="flex flex-col  w-[90vw] md:w-[70vw] h-full relative">
        <div className=" text-white mt-20 flex flex-col justify-center items-center text-start md:text-center gap-8">
          <h1 className="text-4xl font-bold">
            CHRISTIAN <span className=" text-[#ED1C24]">CRAFTS </span> CREATIONS
          </h1>{" "}
          {/* <h1 className="text-2xl font-bold text-[#ED1C24]">
            NURTURING THE NEXT
            GENERATION
          </h1>{" "} */}
          <p className="text-lg ">
            We are a Christ Centered Organization believing in Creativity,
            Accountability, Care, Transparency and Quality Committed service to
            God and His people{" "}
          </p>{" "}
          {/* <div>
            <button
              className="text-md mr-6 bg-[#ED1C24] text-white font-semibold h-[30px] px-[28px] rounded-tr-md rounded-bl-md"
              onClick={() => {}}
            >
              Donate
            </button>
            <button
              className="text-md mr-6 bg-[#ED1C24] text-white font-semibold h-[30px] px-[28px] rounded-tr-md rounded-bl-md"
              onClick={() => {}}
            >
              Donate
            </button>
          </div> */}
        </div>
        <div className=" hidden sm-hidden  md:absolute  md:-bottom-60  md:flex flex-col sm:flex-col md:flex-row w-full z-30  ">
          <div className="bg-[#0E231C]  w-full flex flex-col items-center justify-between py-10 px-10 ">
            <div className=" w-full text-white">
              <h4 className="font-bold text-[25px]">Donate now</h4>

              <p className="my-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
                quo? sit amet consectetur adipisicing elit. Eaque, quo?
              </p>

              <button className="bg-black py-2 px-4 text-back ">Donate</button>
            </div>
          </div>
          <div className="bg-[#AF9659]   flex flex-col items-center justify-between py-10 px-10 ">
            <div className=" w-full text-white">
              <h4 className="font-bold text-[25px]">Donate now</h4>

              <p className="my-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
                quo? sit amet consectetur adipisicing elit. Eaque, quo?
              </p>

              <button className="bg-black py-2 px-4 text-back ">Donate</button>
            </div>
          </div>
          <div className="bg-[#D94B38]  w-full flex flex-col items-center justify-between py-10 px-10 ">
            <div className=" w-full text-white">
              <h4 className="font-bold text-[25px]">Donate now</h4>

              <p className="my-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
                quo? sit amet consectetur adipisicing elit. Eaque, quo?
              </p>

              <button className="bg-black py-2 px-4 text-back ">Donate</button>
            </div>
          </div>

          {/* <div className="bg-[#AF9659] h-[280px] w-full flex  ">baby</div>
          <div className="bg-[#D94B38] h-[280px] w-full flex ">baby</div> */}
        </div>
      </div>
    </div>

    // <section className="flex  min-h-[700px] bg-[url('https://images.unsplash.com/photo-1725137359224-b2a84b2c1a28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8')] bg-cover bg-no-repeat ">
    //   <div className="absolute -bottom-36 flex ">
    //     <div className="bg-red-200 h-[280px] w-[350px]">card</div>
    //     <div className="bg-green-200 h-[280px] w-[350px]">card</div>
    //     <div className="bg-blue-200 h-[280px] w-[350px]">card</div>
    //   </div>
    // </section>
  );
}

export default Hero;

// import React from "react";

// const FullBackgroundImageWithOverlay = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: 'url("/path/to/image.jpg")',
//         height: "400px",
//       }}
//     >
//       {/* Green overlay */}
//       <div className="absolute inset-0 bg-green-500 bg-opacity-50" />

//       {/* Your content goes here */}
//       <div className="relative z-10 text-white text-center py-20">
//         <h1 className="text-4xl font-bold">Hello, world!</h1>
//         <p className="text-lg">
//           This is a full background image with a green overlay.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FullBackgroundImageWithOverlay;
