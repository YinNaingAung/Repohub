import web from '../../assets/image/web.jpg'
import { NavLink } from 'react-router'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Helmet } from 'react-helmet';

const Home = () => {
  let card = [
    {
      id:0,
      img: web,
      title: 'Web Development',
      description: 'We develop complex interface systems for web, mobile, and android platforms.'
    },
    {
      id:1,
      img: web,
      title: 'Web Development',
      description: 'We develop complex interface systems for web, mobile, and android platforms.'
    },
    {
      id:2,
      img: web,
      title: 'Web Development',
      description: 'We develop complex interface systems for web, mobile, and android platforms.'
    },
    {
      id:3,
      img: web,
      title: 'Web Development',
      description: 'We develop complex interface systems for web, mobile, and android platforms.'
    }
  ]

  let service = [
    {
      id:0,
      img:new URL('../../assets/image/analytics.png', import.meta.url).href,
      title:"Analytics",
    },
     {
      id:1,
      img:new URL('../../assets/image/observation.png', import.meta.url).href,
    
      title:"Observation",
    },
     {
      id:2,
            img:new URL('../../assets/image/research.png', import.meta.url).href,

      title:"Research",
    },
     {
      id:3,
            img:new URL('../../assets/image/search.png', import.meta.url).href,

      title:"Search",
    }
  ]

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
          duration: 1000,
          distance: '40px',
          // easing: 'ease-in-out',
          origin: 'bottom',
          interval: 200,
          scale: 0.9,
          viewFactor: 0.1,
          result : true 
        });
  }, []);

  return (
    
    <div >
        <Helmet>

<title>RepoHub</title>
<meta name="title" content="RepoHub" />
<meta name="description" content="RepoHub project practise with react/bootstrap" />

<meta property="og:type" content="website" />
<meta property="og:url" content="repo.co" />
<meta property="og:title" content="RepoHub" />
<meta property="og:description" content="RepoHub project practise with react/bootstrap" />
<meta property="og:image" content="../../assets/image/repo.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="repo.co" />
<meta property="twitter:title" content="RepoHub" />
<meta property="twitter:description" content="RepoHub project practise with react/bootstrap" />
<meta property="twitter:image" content="../../assets/image/repo.png" />


            </Helmet>

      {/* Home Section  */}
        <div className="container">
        <div className=" row justify-content-center ">
          <div className="  col-10">
                <section className="container mb-5">
          <div className="row">
            <div className="col-12">
                <div className='mt-5 pt-5'>
                    <h3 className='reveal'>Digital Agency</h3>
                    <h5 className='mb-3 reveal '>We developer complex interface systems for web mobile and andriod</h5>
                    <img src={web} className=' w-100 rounded-3  reveal' alt="Web Development"></img>
                </div>
            </div>

          </div>
        </section>
          </div>
           
        </div>
           
      </div>
        
    {/* Home Section  */}

    {/* work section  */}
      <div className=' bg-secondary-subtle'>
        
          <div className="container">
              <div className=" row justify-content-center ">
                <div className="  col-10">
                    <section className=' container'>

                        <div className="row">
                          <div className="col-12">
                              <div className='mt-5'>
                                  <h3 className=' text-center mb-4 reveal'>Our Work select project</h3>
                                  <div className='row row-cols-1  row-cols-md-2 g-3'>
                                  
                                          {card.map(item=>{
                                            return(
                                                  <div key={item.id} className='col reveal'>
                                                        <div  className="card rounded-3">
                                                            <img src={web} className="card-img-top" alt="..."/>
                                                            <div className="card-body">
                                                              <h5 className="card-title">{item.title}</h5>
                                                              <p className="card-text">{item.description}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                            )
                                          })}
                                    
                                        
                                  </div>
                                  
                                
                              </div>
                          </div>

                        </div>

                    </section>
                </div>
              </div>
          </div>
      </div>
    {/* work section  */}


    {/* Service section  */}
        <div className=' bg-secondary-subtle'>
        
          <div className="container">
              <div className=" row justify-content-center ">
                <div className="  col-10">
                    <section className=' container justify-content-center  mt-5'>

                        <div className="row row-cols-1 row-cols-lg-2 gx-3">
                          <div className='col'>
                                <div className="reveal ">            
                                    <h3>Our Service</h3>
                               </div>
                          </div>
                          <div className='col'>
                               <div className="reveal">
                                    <p>Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link</p> 
                               </div>
                          </div>
                         
                        </div>

                  
                          <div className='row row-cols-2 row-cols-lg-4 mb-5'>
                            {service.map(item => {
                              return(
                                <div key={item.id} className='col g-3 reveal'>
                                                        <div  className="card rounded-3 pt-3">
                                                          <div className='text-center'>
                                                            <img src={item.img} className="card-img-top w-50 " alt="..."/>
                                                          </div>
                                                            <div className="card-body">
                                                              <h6 className="card-title text-center">{item.title}</h6>
                                                            
                                                            </div>

                                                      </div>
                                                </div>
                              )
                                 
                            })}
                                         
                                
                        </div>

                          <div className='text-end mb-5 reveal'>
                            <h6>Explore More <i className="fa-solid fa-angle-right"></i></h6>
                          </div>
                    </section>
                </div>
              </div>
          </div>
      </div>
    {/* Service section  */}

      {/* story section  */}
      <div className ="border-bottom border-1 border-secondary">
 <div className="container ">
        <div className=" row justify-content-center ">
          <div className="  col-10">
                <section className="container">
                    <div className="row">
                      <div className="col-12">
                          <div className='my-5 py-5 text-center reveal'>
                              <span>Next</span>
                              <h4>Our story</h4>
                              <NavLink to="/story" className={({ isActive }) => (isActive ? "text-danger text-decoration-none" : "text-decoration-none")}>Story</NavLink>
                          </div>                    
                      </div>

                    </div>
                </section>
          </div>
           
        </div>
           
      </div>
      </div>
      
        
      {/* story section  */}

      {/* footer section  */}
             <div className=''>
        
          <div className="container">
              <div className=" row justify-content-center ">
                <div className="  col-lg-10">
                    <section className  =' container'>
                            <div className='row p-3    '>
                                <div className="col  col-12  col-md-8 col-lg-1">
                                  <div className=' text-center mb-2 text-md-start'>
                                    <NavLink to="/" className='me-md-3 me-2 text-decoration-none text-secondary'>Home</NavLink>
                                    <NavLink to="/" className='me-md-3 me-2 text-decoration-none text-secondary'>Service</NavLink>
                                    <NavLink to="/" className='me-md-3 me-2 text-decoration-none text-secondary'>Story</NavLink>
                                    
                                    <NavLink to="/" className='me-md-3 me-2 text-decoration-none text-secondary  d-lg-none'>Careers</NavLink>
                                    <NavLink to="/" className='me-md-3 text-decoration-none text-secondary  d-lg-none '>Contact us</NavLink>
                                  </div>
                                </div>

                                <div className='col col-md-3 col-lg-6 '>
                                     <div className=" text-center text-md-end">
                                      <h5>Repohub</h5>
                                    </div>
                                </div>
                               
                              <div className="col d-none d-lg-block">
                                   <div className="text-end ">
                                    <span className="me-3">Careers</span>
                                    <span>Contact us</span>                            
                                   </div>
                              </div>
                               
                            </div>
                        

                    </section>
                </div>
              </div>
          </div>
      </div>



             

      {/* footer section  */}

    </div>
  );
}
export default Home;