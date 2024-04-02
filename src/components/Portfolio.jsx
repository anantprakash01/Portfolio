import React from 'react'

import PortfolioItem from './PortfolioItem';

const Portfolio = () => {

  const portfolioItems = [
    {
      id: 1,
      imageUrl: 'https://img.freepik.com/free-psd/american-food-website-app-template_23-2148477329.jpg?t=st=1709614824~exp=1709618424~hmac=120603a9aa36a113034a783810d95d374ddbcb1767e1fd70beeae0e8a6ea15d3&w=1380',
      title:"Taskify - Your Personal Todo Manager"
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/free-vector/landing-page-with-laptop_23-2148350418.jpg?t=st=1712079907~exp=1712083507~hmac=0d77940ac305fc32309c828e8af1458c21ac402de6cc006db375c1242b21a6ad&w=1800',
      title:"E-Commerce Website Using React & Spring Boot"
    },
    {
      id:3,
      imageUrl:'https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?t=st=1709614991~exp=1709618591~hmac=33457f9c143385c61354c089b6d9c36255b7b1d037c0a101d040b542e926c2f3&w=1800'
    },
  ];
  



  return (
    <>
      <section id="portfolio" className="portfolio section-bg" style={{paddingTop:"70px"}}>
      <div className="container">

        <div className="section-title">
          <h2 className='underlined'>Portfolio</h2>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          {
            portfolioItems.map(item=>(
              <PortfolioItem key={item.id} imageSrc={item.imageUrl} title={item.title}/>
            ))
          }

        </div>
      </div>
    </section>
    </>
  )
}

export default Portfolio
