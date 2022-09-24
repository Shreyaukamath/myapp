// import logo from './logo.svg';
import './App.css';
import pic from './tzuyu.jpg'
import pic1 from './resort.jpg'
import pic2 from './resort1.jpg'
import pic3 from './resort2.jpg'
import pic4 from './resort3.jpg'
import pic5 from './resort4.jpg'
import pic6 from './resort5.jpg'




function Portfolio() {
 return(
  <div className='ss'>
    <Profile />
    <Home />
    <Skills />
    <Work />

  
  </div> );
}
function Profile ()
{
  return(
  <div>
  <body bgcolor="pink" > <center><h2> My portfolio</h2>
  </center>
  <img  src= {pic} alt= "my profile pic" width = '15%' height = '10%' style={{float: "left ", padding: "10px"}}/>
    
  </body>

  </div>
);}

function Home ()
{
  return (
  <section>
  <h2 >About</h2>

  <div>
      <div >
          
      </div>
      
      <div>
          <h2 >I am Shreya</h2>
          <p sty>A highly disciplined and hardworking individual, looking forward
              to work in an organization that
              provides me with ample
              opportunities to enhance my skills
              and knowledge along with
              contributing to the growth of the
              organization & always excited to
              Learn & Work in New Technologies.
              
              
              
              
              
              
              
              
              </p>           
      </div>                                   
  </div>
</section>
  )
    
  
}
function Skills ()
{
  return (

    <section class="skills section" id="skills">
     ____________________________________________________________________________________________________________________________________________________________________________________________________________
                <h1 class="section-title" >SKILLS</h1>

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Professional Skills</h2>

                        <p class="skills__text"><h3>Range of skills that i can perform:</h3></p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name"><h4>HTML5:   95%</h4></span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name"><h4>CSS: 85%</h4></span>
                            </div>
                            {/* <div class="skills__bar skills__css">
                                
                            </div> */}
                            {/* <div>
                                <span class="skills__percentage"></span>
                            </div> */}
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name"><h4>JAVASCRIPT: 65%</h4></span>
                            </div>
                            {/* <div class="skills__bar skills__js">
                                
                            </div> */}
                            {/* <div>
                                <span class="skills__percentage">65%</span>
                            </div> */}
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon' ></i>
                                <span class="skills__name"><h4>JAVA: 85%</h4></span>
                            </div>
                            {/* <div class="skills__bar skills__ux">
                                
                            </div> */}
                            {/* <div>
                                <span class="skills__percentage">85%</span>
                            </div> */}
                        </div>
                    </div>
                    
                    <div>              
                        {/* <img src= {pic} alt="" /> */}
                    </div>
                </div>
            </section>
            )
            }
            
            function Work () {
                return (

            <section >
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            <h1><strong>WORK</strong></h1>

            <div>
                
                <img src={pic1} alt="" width = '50%' height = '50%'/>
            
                <img src={pic2} alt="" width = '49%' height = '50%'/>
                
                <img src={pic3} alt="" width = '50%' height = '50%'/>
                
                <img src={pic4} alt="" width = '50%' height = '50%'/>
                
                <img src={pic5} alt="" width = '50%' height = '50%'/>
                
                <img src={pic6} alt="" width = '50%' height = '50%'/>
            
                {/* // <a href="" class="work__img">
                //  <img src="resort6.jpg" alt=""/>
                // </a>
                //  <a href="" class="work__img"/>
                // <img src="resort7.jpg" alt=""/> 
                // </a> */}
            </div>
        </section>                 
  )
}



export default App;
