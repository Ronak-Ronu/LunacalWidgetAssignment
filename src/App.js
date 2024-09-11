import React, { useState,useRef } from "react";
import "./App.css";

function App() {

  const [currentTab,setCurrentTab]=useState("AboutMe")
  const [images, setImages] = useState(['./defaultimage.jpeg']);
  const containerRef = useRef(null);
  const handleTabSwitch=(tabName)=>{

    setCurrentTab(tabName)

  }
  const [selectedImage, setSelectedImage] = useState('./defaultimage.jpeg');

 const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]); // Add new image to the list
    }
  };
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200; // Adjust this value to control scroll amount
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="h-screen flex justify-center items-center gap-x-[56px]">

      <div className="w-[863px] h-[689px] flex items-center justify-center bg-gray border rounded-[27px] border-bordercolorblue border-width-10 p-10 text-[18px] text-white leading-[30px] font-500">
      <a href="https://github.com/Ronak-Ronu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">

          <div className="flex flex-col items-center justify-center gap-y-10">
            <div className="h-[300px] w-[300px] hover:rotate-2  transition-all duration-500">

                <img src="https://avatars.githubusercontent.com/u/112187817?s=400&u=af7e21c0bd2af75a3991b696e406aa7c69e7d6f0&v=4" alt="" className="rounded-full border-4 border-bordercolorblue"/>
            </div>
            <div className="">
            <span className="text-2xl font-semibold text-white font-plus hover:text-textgray transition-all duration-500">Follow me on GitHub</span>

            </div>

          </div>
          </a>
  
        </div>


      <div className="flex items-center flex-col gap-y-[24px] mt-4">

      <div className="w-[720px] h-[316px] flex flex-row bg-gray-dark border rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066] ">
       
        <div className="flex flex-col p-5 gap-y-[105px]">
         
          <div>
          <img className="" src="Questiontag.svg" alt="QuestionImage" />
          </div>
          <div className="flex flex-row ">
            <div>
            <div className="bg-gray-light  h-[9.31px] w-[9.31px] m-0.5  rounded-[1.16px]"></div>
            <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
            <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
            </div>
            <div>
            <div className="bg-gray-light  h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
            <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
            <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
            </div>
          </div>
        </div>
        

        <div className="flex flex-col">
          
          <div className="absolute flex flex-row items-center justify-around mt-[17px] rounded-[23px] shadow-[0px_4.96px_12.4px_2.48px_#00000040] w-[614px] h-[62px] bg-black " >
         
                  <div
                      className={`absolute top-1 left-1 h-[49px] w-[195px]    rounded-[16px] gap-x-[10px]   cursor-pointer bg-navdark shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A] box-shadow-[-8.43px_-16.87px_50.6px_-16.87px_#485B71] transition duration-700 ease-in-out z-[1] ${
                        currentTab === "AboutMe"
                          ? "translate-x-0"
                          : currentTab === "Experience"
                          ? "translate-x-[210px]"
                          : "translate-x-[410px]"
                      }`}
                    />
<div className={` h-[49px] w-[195px] p-[10px_24px_10px_24px] text-[18px]   flex items-center justify-center  rounded-[16px] gap-x-[10px]   cursor-pointer z-[2] 
                      
    
    
                          ${currentTab==="AboutMe"?"text-white transition duration-700":"text-fontgraycolor"}
    
                          `}
                            onClick={()=>handleTabSwitch("AboutMe")}
                          >
                            <span className="font-poppins ">About Me</span>
    
                          </div>
                  

                      <div className={` h-[49px] w-[195px] p-[10px_24px_10px_24px] text-[18px]   flex items-center justify-center  rounded-[16px]  cursor-pointer z-[2] 
                      
                          ${currentTab==="Experience"?"text-white transition duration-700":"text-fontgraycolor"}
                      `}
                      onClick={()=>handleTabSwitch("Experience")}>
                        <span className="font-poppins ">Experience</span>
                      </div>
                  

                  
                      <div className={`h-[49px] w-[195px] p-[10px_24px_10px_24px] text-[18px] rounded-[16px] flex items-center justify-center cursor-pointer z-[2]
                          ${currentTab==="Recommended"?"text-white transition duration-700":"text-fontgraycolor"}
                      `}
                      onClick={()=>handleTabSwitch("Recommended")}
                      >
                      <span className="font-poppins  ">Recommended</span>
                      </div>
                     
          
             </div>
        
        <div className="absolute top-[190px] w-[611px]  h-[175px] overflow-y-auto mt-7">
          
               <div className=" ">
                      <div  className="font-plus text-textgray leading-[25.2px] text-[18px] w-[580px]  ">
                       
                              <span>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                              </span>      <br /><br /> 
                              <span >
                              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                              </span>
                              <span>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                              </span>      <br /><br /> 
                              <span >
                              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                              </span>
                              <span>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                              </span>      <br /><br /> 
                              <span >
                              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                              </span>
                            
                        </div>
          </div>
        </div>
        </div>
         

      </div>

      <div className="w-[612px] h-[4px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.05)] shadow-[5.67px_5.67px_3.78px_0px_#00000066]"></div>   
    
      <div className="w-[720px] h-[316px]  bg-gray-dark border rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]">

<div className="flex flex-row">

      <div className="flex flex-col p-5 gap-y-[105px]">
         
         <div>

         <img className="" src="Questiontag.svg" alt="QuestionImage" />
         </div>

         <div className="flex flex-row ">
              <div>
                  <div className="bg-gray-light  h-[9.31px] w-[9.31px] m-0.5  rounded-[1.16px]"></div>
                  <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
                  <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
              </div>

              <div>
                  <div className="bg-gray-light  h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
                  <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
                  <div className="bg-gray-light h-[9.31px] w-[9.31px] m-0.5 rounded-[1.16px]"></div>
              </div>
         </div>

      </div>

       <div className="flex flex-col gap-y-6">

        <div className="flex flex-row gap-x-40 mt-[17px]">
                            
                  <div className={` h-[62px] w-[149px] p-[10px_24px_10px_24px] text-[18px] flex items-center justify-center  rounded-[20px] bg-black text-white  `}>
                            
                              <span className="font-poppins ">Gallery</span>
                            
                  </div>

                  <div className="flex flex-row justify-between gap-x-10 ">
                               <div 
                             className={`w-[131.32px] h-[50px] bg-addimagebg rounded-[104px] flex flex-row items-center justify-around gap-1 text-white mt-[5px]
                              shadow-[0_4px_8px_rgba(0,0,0,0.4),_0_0_10px_rgba(255,255,255,0.15)_inset] text-[14px] font-medium tracking-wide
                          cursor-pointer`}
                          onClick={() => document.getElementById("imageInput").click()}
                                  >
                                    <div >
                                      
                                          <div>
                                          + Add image
                                          </div>

                                    </div>
                                  </div>
                        <div className="w-[100px] flex flex-row  mt-1">

                                                  <div className="flex space-x-5 ">
                          
                            <div  className="w-[45px] h-[45px]  bg-[#1F252A] cursor-pointer rounded-full flex items-center justify-center  shadow-[0_5px_10px_rgba(0,0,0,0.5),_0_0_8px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_5px_10px_rgba(0,0,0,0.5),_0_0_8px_rgba(255,255,255,0.8)_inset] transition-all duration-700"
                              onClick={()=>scroll('left')}
                            >
                              <span className="text-[#A3A8AC]"><img src="arrowicon.svg" alt="" /></span> 
                            </div>


                            <div className="w-[45px] h-[45px] bg-[#1F252A] cursor-pointer rounded-full flex items-center justify-center shadow-[0_5px_10px_rgba(0,0,0,0.5),_0_0_8px_rgba(255,255,255,0.1)_inset]  hover:shadow-[0_5px_10px_rgba(0,0,0,0.5),_0_0_8px_rgba(255,255,255,0.8)_inset] transition-all duration-700"
                               onClick={()=>scroll('right')}
                            >
                              <span className="text-[#A3A8AC]"><img src="arrowicon2.svg" alt="" /></span> 
                            </div>
                          </div>

                        </div>
                  </div>
                        


        </div>
        

        <div ref={containerRef} className="scroll-container flex flex-row overflow-x-auto gap-x-4 p-4 w-[650px]  ">
                                  <input
                                  type="file"
                                  id="imageInput"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                  style={{ display: "none" }}
                                />
                                <div className="flex flex-row gap-x-4">
                                <div  className="bg-gray rounded-3xl grayscale hover:grayscale-0 hover:saturate-200 h-[179px] w-[190px] object-cover shadow-md transition-transform duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black relative overflow-hidden">
                                      <img src={selectedImage} alt='' className="object-cover w-full h-full" />
                                    </div>   
                                   
                                    <div  className="bg-gray rounded-3xl grayscale hover:grayscale-0 hover:saturate-200 h-[179px] w-[190px] object-cover shadow-md transition-transform duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black relative overflow-hidden">
                                      <img src={selectedImage} alt='' className="object-cover w-full h-full" />
                                    </div>
                                  {images.map((src, index) => (
                                    <div key={index} className="bg-gray rounded-3xl grayscale hover:grayscale-0 hover:saturate-200 h-[179px] w-[190px] object-cover shadow-md transition-transform duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black relative overflow-hidden">
                                      <img src={src} alt={`Uploaded ${index}`} className="object-cover w-full h-full" />
                                    </div>
                                    
                                  ))}
                                 
                            </div>
                         
              </div>
       </div>
       </div>



      </div>                                                                     






      <div className="w-[612px] h-[4px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.05)] shadow-[5.67px_5.67px_3.78px_0px_#00000066] "></div>   

      </div>

    </div>
    
  );
}

export default App;