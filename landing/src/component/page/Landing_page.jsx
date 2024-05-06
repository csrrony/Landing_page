import React from 'react';
import {Link} from 'react-router-dom';
import { GiGraduateCap,GiProfit } from "react-icons/gi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { BiSolidPhoneCall,BiSolidCalculator } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
import { GrUserManager } from "react-icons/gr";

const Landing_page = () => {

  const benefitItem = [
    "Maximize Tax Savings",
    "Financial Confidence",
    "Customized Solutions",
    "Efficiency and Accuracy"
  ]
  const benefitedCompany = [
    {img:"img/benefited1.jpg"},
    {img:"img/benefited2.jpg"},
    {img:"img/benefited3.jpg"},
    {img:"img/benefited4.jpg"},
    {img:"img/benefited5.jpg"},
    {img:"img/benefited6.jpg"},
    {img:"img/benefited7.jpg"},
    {img:"img/benefited8.jpg"},
    {img:"img/benefited9.jpg"},
    {img:"img/benefited10.jpg"}
  ]

  const services = [
    {
      icon: <CgNotes/>,
      color:"top",
      heading:"Tax Planning & Preparation",
      desc:"Our Tax Planning service ensures you pay only what's necessary"
    },
    {
      icon:<BiSolidCalculator/>,
      color:"button",
      heading:"Forensic Accounting",
      desc:"Our Forensic Accounting team uncovers financial irregularities"
    },
    {
      icon:<GiProfit/>,
      color:"top",
      heading:"Non-Profit Accounting",
      desc:"Non-Profit Accounting taillored for organizations with a mission"
    },
    {
      icon:<SlNotebook/>,
      color:"button",
      heading:"Bookkeeping & Payroll",
      desc:"We handle your books and payroll efficiently"
    },
    {
      icon:<GrUserManager/>,
      color:"top",
      heading:"Financial Consulting",
      desc:"Get expert financial advice with our Consulting service"
    }
  ]

  const satisfiedClients = [
    {
      name:"Jane S",
      img:"img/satisfied1.jpg",
      comment:`"I've been working with this accounting firm for years, and they've consistently saved me money on taxes. Their attention to detail is unmatched!"`,
      star:5
    },
    {
      name:"Jeni F",
      img:"img/satisfied2.jpg",
      comment:`"As a freelancer, managing my finances can be challenging. Thanks to their expertise. Now i have a clear financial plan in place. Highly recommended!"`,
      star:5
    },
    {
      name:"John D",
      img:"img/satisfied3.jpg",
      comment:`"I've been investing for years, and their accounting services have been crucial in managing my portfolio effectively. Their expertise has helped me maximize my returns."`,
      star:5
    },
    {
      name:"Emily R",
      img:"img/satisfied4.jpg",
      comment:`"Their accounting service is awesome. It has been crucial for solving financila problem. Their expertise has helped me maximize my returns. Thanks to their expertise."`,
      star:5
    }
  ]
 

  return (
    <div>
      <section id='head'>
        <div className=' flex justify-center items-center bg-top text-first text-center text-balance py-1 font-semibold'><GiGraduateCap className=' text-black mr-1'/>Our Team Holds Top Certifications And Degrees In Accounting And Finance<GiGraduateCap className='text-black ml-1' /></div>
        
        <div className='flex bg-first justify-between items-center py-3 px-4 sm:px-10'>
          <div className=" text-top text-4xl font-bold leading-[0]">
              A<span className=' uppercase text-lg'>ccounting</span>
          </div>
          <div className='flex gap-4'>
              <div className=' flex justify-center items-center gap-1 text-heading font-bold border-2 border-button py-1 px-1 sm:px-4 rounded-[4px]'><span className=' text-button'><BiSolidPhoneCall /></span>+8801779860229</div>
              <Link to={"/"}
              className=' bg-button text-first rounded-[4px] px-1 sm:px-4 py-1 font-bold'>Schedule a Demo</Link>
          </div>
        </div>
      </section>

      <section id='hero'>
        <div className='relative'>
          <img src={"img/accounter.jpg"} alt="" className='w-full h-[600px] object-cover am:object-top object-right-top'/>
          <div className=' absolute h-full w-full bg-gradient-to-r from-second to-transparent top-0'></div>
          <div className='absolute top-20 ml-20'>

            <div className='flex justify-start items-center gap-3'>
              <div className='flex text-red-500'>
                {
                  [...Array(4)].map(_ =>(<FaStar/>))
                }
                <FaStarHalfAlt />
              </div>
              <span>Trusted by over 500 happy customers</span>

            </div>
            <h1 className='font-bold flex text-left justify-start text-4xl lg:text-5xl text-heading w-[80%] md:w-[60%] mt-3'>Maximize Your Finances with Expert Accounting Services</h1>
            <p className='mt-7 mb-3 text-lg font-semibold text-left'>Your Trusted Partners for Financial Success</p>
            <div className='flex flex-col gap-2 mb-7'>
              {
                benefitItem.map(item =>(
                  
                  <div className='flex items-center gap-2 font-semibold justify-start' ><IoIosCheckmarkCircle className=' text-top'/>{item}</div>
                ))
              }
            </div>
            <div className='flex justify-start'>
              <Link to={"/"} className=' bg-button flex text-first rounded-[4px] px-4 py-2 sm:mt-2 font-bold'>Schedule a Demo</Link>
            </div>
            
          </div>
        </div>
      </section>
      
      <section id='intro'>

        <div>
          <div className='flex justify-evenly items-center w-[90%] md:w-[70%] mx-auto px-1 sm:px-0 py-10 gap-3 bg-second rounded-lg -translate-y-16 '>
            <div className=' flex flex-col justify-center items-center text-center font-bold gap-1 text-[12px] sm:text-sm'>
              <p className='text-top text-3xl'><FaAward /></p>  
              <p>Voted 'Best Accounting <br /> Firm 2024'</p>
            </div>
            <div className=' flex flex-col justify-center items-center text-center font-bold gap-1 text-[12px] sm:text-sm'>
              <p className='text-top text-3xl'><PiCertificateFill /></p>  
              <p >Certified Public <br />Accountants (CPA)</p>
            </div>
            <div className=' flex flex-col justify-center items-center text-center font-bold gap-1 text-[12px] sm:text-sm'>
              <p className='text-top text-3xl'><IoShieldCheckmarkSharp /></p>  
              <p>Trusted by 8,000+ <br /> Companies Worldwide</p>
            </div>
          </div> 
        </div>


        <div className=' grid grid-cols-1 md:grid-cols-2 pb-10 items-center'>
              <div className=' ml-10 mr-10 overflow-hidden'>
                <img className='rounded-lg' src={"img/whoWeAre.jpg"} alt="" />
              </div>
              <div className='w-[80%] mx-auto md:mx-0'>
                <p className=' text-heading text-4xl font-bold mb-4 pt-4 md:pt-0'>Who We Are?</p>
                <p className=' font-semibold mb-10'>We are experienced accountants dedicated to helping you achieve financial success. Our team holds top certifications and degrees in accounting and finance, and we are committed to delivering exceptional service based on trust, transparency, and integrity</p>

                <Link to={"/"} className=' bg-button text-first rounded-[4px] px-4 py-2 mt-8 font-bold'>Schedule a Demo</Link>
              </div>
        </div>

      </section>

      <section id='experties'>

        <div className=' grid grid-cols-1 md:grid-cols-2 items-center py-10 bg-second'> 
              <div className='w-[80%] ml-10 order-2 md:order-1'>
                <p className=' text-heading text-4xl font-bold mb-4 mt-4 md:mt-0'>20 Years of Expertise</p>
                <p className=' font-semibold mb-10'>Our expertise lies in providing services related to Tax Planing, Forensic Accounting, and Non-Profit Accounting. <br /><br />
                With over 20 years of experience, we provide unparalleled expertise to each client and use state of the art  technology for efficient and precise accounting services.
                </p>
                <Link to={"/"} className=' bg-button text-first rounded-[4px] px-4 py-2 mt-8 font-bold'>Schedule a Demo</Link>
              </div>
              <div className='relative w-[80%] mx-auto md:w-[90%] md:mr-10 flex order-1 md:order-2'>
                <img className=' bottom-0 left-0 rounded-lg w-[60%] h-[300px] mt-[100px] object-cover' src={"img/experties.jpg"} alt="" />
                <img className='w-[60%] h-[300px] rounded-lg top-0 right-0 absolute object-cover' src={"img/experties1.jpg"} alt="" />
              </div>
        </div>

      </section>

      <section id='services'>

        <div className='text-heading text-4xl font-bold text-center mt-10'>Services We Offer</div>
        <div className=' flex w-[90%] sm:w-[70%] md:w-[80%] mx-auto flex-wrap justify-center items-center gap-6 mt-14 '>
           {
            services.map(({icon,color,heading,desc},i) =>(
              <div className={` group rounded-xl h-[180px] w-[55%] sm:w-[43%] lg:w-[30%] p-4 sm:p-3 sm:h-[200px] md:h-[180px] md:p-4 border-t-2 border-${color} shadow-lg`}>
                <p className={`text-${color} group-odd:bg-blue-100 group-even:bg-orange-100 flex justify-center items-center rounded-lg mb-2 text-3xl w-[50px] p-2`}>{icon}</p>
                <p className=' text-heading text-lg font-bold'>{heading}</p>
                <p className=' text-sm text-heading pb-2'>{desc}</p>
              </div>
            ))
           }
        </div>
        <div className='flex justify-center mb-10'>
          <Link to={"/"} className=' bg-button text-first rounded-[4px] px-4 py-2 mt-8 font-bold'>Schedule a Demo</Link>
        </div>
        
      </section>

      <section id='benifited'>
        
        <div className=' grid grid-cols-1 lg:grid-cols-2 pb-10 items-center bg-second py-10'>
              <div className=' ml-10 mr-10 flex flex-wrap gap-3 justify-center w-[90%] mx-auto mb-4 lg:mb-0'>
                {
                  benefitedCompany.map(({img}) =>(
                    <img className='rounded-sm w-[150px] md:odd:w-[150px] md:even:w-[200px]' src={img} alt="" />
                  ))
                }  
              </div>

              <div className='flex w-[80%] mx-auto lg:mx-0 lg:flex justify-center flex-col lg:justify-start lg:text-left items-center lg:items-start text-center'>
                <p className=' text-heading text-4xl font-bold mb-4 pt-4 md:pt-0'>Who Can Benefit from Our Services?</p>
                <p className=' font-semibold mb-3 '>We offer tailored services for <strong>small businesses</strong>,<strong> freelancers</strong>, and <strong>large corporations</strong>-from accounting to business advisory. <br /><br />Our experienced team provides personalized attention to help you succeed</p>
                <Link to={"/"} className=' bg-button text-first rounded-[4px] px-4 py-2 mt-8 font-bold'>Schedule a Demo</Link>
              </div>
        </div>

      </section>

      <section id='feedback'>

        <div className='w-full py-10'>
           <p className=' text-heading text-center text-4xl font-bold mb-4 pt-4'>Quotes from Satisfied Clients</p>
           <div className='flex flex-col md:flex-row gap-6 overflow-y-auto md:overflow-x-auto w-[90%] h-[280px] md:h-auto mx-auto no-scrollbar p-10'>
              {
                satisfiedClients.map(({img,name,comment,star}) => (
                  <div className='min-w-[380px] p-6 shadow-xl rounded-xl border-t-2 border-button'>
                    <p className='flex text-button'>
                      {
                        [...Array(star)].map(_ => <FaStar/>)
                      }
                      
                    </p>
                    <p className='my-2'>{comment}</p>
                    <div className='flex items-center gap-3'>
                      <img src={img} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
                      <p className='font-bold'>{name}</p>
                    </div>
                  </div>
                ))
              }
           </div>  
        </div>

      </section>

      <section id='footer'>

        <div className='relative'>
          <img src={"img/accounter.jpg"} alt="" className='w-full h-[450px] object-cover am:object-top object-right-top'/>
          <div className=' absolute h-full w-full bg-gradient-to-r from-second to-transparent top-0'></div>

          <div className='absolute top-6 lg:top-20 ml-10 sm:ml-20'>
            <h1 className='font-bold flex text-left justify-start text-3xl lg:text-5xl text-heading w-[80%] md:w-[62%] mt-3'>Let's Discuss How We can Optimize your Financial Success</h1>
            <p className='mt-7 mb-3 text-lg font-semibold text-left w-[60%]'>In addition to the services included in the packages above, we offer a range of customizable options to meet your unique business requirements</p>
            
            <div className='flex justify-start flex-col '>
              <Link to={"/"} className=' bg-button flex px-4 text-first rounded-[4px] py-2 sm:mt-2 font-bold w-[311px]'>I'm Ready to Transform My Finances!</Link>
              <p className=' text-center w-[311px]'>Schedule a Free Consultation Today!</p>
            </div>  
          </div>

        </div>
        <div className=' bg-gray-400 flex justify-between py-4 px-8 text-slate-200'>
          <p>Privacy policy and legal notices</p>
          <p>Phone:+8801779860229</p>
        </div>

      </section>
    </div>
  )
}

export default Landing_page