// import { useState } from 'react'
import './App.css'

function Portfolio() {
  return (
    <>
      <div className='frame8-12'>
        <img src="image/Frame 7.png" alt="" />
        <div className='info'>
          <h1>Mi portal U</h1>
          <div className='labels'>
            <label htmlFor="">UX Design</label>
            <label htmlFor="">University</label>
            <label htmlFor="">Javascript</label>
          </div>
        </div>
        <button>Figma Community</button>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <div className='landing'>
        <div className='hero'>
          <div className='navigation-bars'>
            <div className='logo'>
              <img src="image/Logo.png"  />
            </div>

            <div className='opsions'> 
              <h4>Home</h4>
              <h4>Portfolio</h4>
              <h4>Skills</h4>
              <h4>About Me</h4>
            </div>

            <div className='frame5'>
              <button className='switchMode'>
                <div className='sun'></div>
                <img src="image/moon.png" ></img>
                </button>

              <div className='buttons'>
                <button>Contact Me</button>
              </div>
            </div>
          </div>

          <div className='frame10'>
            <div className='frame9'>
              <div className='title'>
                <div className='frame1'>
                  <p className='product'>PRODUCT DESIGNER</p>
                  <p className='cristian'>CRISTIAN MUÑOZ</p>
                </div>

                <div className='frame6'>
                  <div className='socialNetworks'>
                    <img src="image/instagram.png" alt="" />
                    <img src="image/Figma.png" alt="" />
                    <img src="image/linkedin.png" alt="" />
                    <img src="image/twitter.png" alt="" />
                    <img src="image/telegram.png" alt="" />
                    <img src="image/Medium Logo.png" alt="" />
                  </div>

                  <button className='download'>
                    <p>Download Curriculum Vitae</p>
                    <img src="image/arrow-down.png" alt="" />
                  </button>
                </div>
             </div>
              <div className='portal'>
                <img src="image/Portal.png" alt="" />
              </div>
            </div>
            <div className='escultures'>
              <img src="image/colorful.png" alt="" />
            </div>
          </div>
        </div>
        <div className='frame26'>
          <div className='rates'>
            <div className='frame5-1'>
              <div className='jbs'>
                <h1>90%</h1>
                <h4>Job Success Score on Upwork</h4>
              </div>
              <div className='dawn'>
                <img src="image/Dawn.png" alt="" />
              </div>
              <div className='figma'>
                <h1>&gt;25000</h1>
                <h4>Duplicates on Figma Community</h4>
              </div>
              <div className='dawn'>
                <img src="image/Dawn.png" alt="" />
              </div>
              <div className='money'>
                <h1>&gt;2k</h1>
                <h4>In Finished Works</h4>
              </div>
            </div>
          </div>
          <div className='frame31'>
            <p>PORTFOLIO</p>
            <div className='frame17'>
              <div className='frame10'>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
              </div>
              <div className='frame10'>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
              </div>
            </div>
          </div>
          <div className='frame30'>
            <p>SKILLS</p>
            <div className='skillsFrame21'>
              <div className='skillsFrame6'>
                <div className="skill-details">
                  <h1>97%</h1>
                </div>
                <div className='skillsFrame18'>
                  <h1>UX Design</h1>
                  <h4>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</h4>
                </div>
              </div>
              <div className='skillsFrame6'>
                <div className="skill-details">
                  <h1>97%</h1>
                </div>
                <div className='skillsFrame18'>
                  <h1>UX Design</h1>
                  <h4>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</h4>
                </div>
              </div>
              <div className='skillsFrame6'>
                <div className="skill-details">
                  <h1>97%</h1>
                </div>
                <div className='skillsFrame18'>
                  <h1>UX Design</h1>
                  <h4>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</h4>
                </div>
              </div>
              <div className='skillsFrame6'>
                <div className="skill-details">
                  <h1>97%</h1>
                </div>
                <div className='skillsFrame18'>
                  <h1>UX Design</h1>
                  <h4>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='frame25'>
            <div className='frame23'>
              <p>Kaleb Lechtenberg</p>
              <p>&ldquo; Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also.	&rdquo;</p>
              <img src="image/Shield 1.png" alt="" />
            </div>
          </div>
          <div className='group29'>
            <div className='aboutMe'>
              <h1>ABOUT ME</h1>
              <img src="image/Zig Zag.png" alt="" />
              <p>I am a <span>Product Designer</span> and Frontend Developer, I fully understand the process of design and development of a digital product, my job is to make a product usable and visually appealing, through the <span>Design Thinking</span> methodology I manage to create products that are endearing to users.</p>
            </div>
            <div className='aboutMeImg'>
              <img src="image/2021-09-13 1.png" alt="" />
            </div>
            <div className='aboutMeImg'>
              <img src="image/she.png" alt="" />
            </div>
            <div className='aboutMe1'>
              <p>I am passionate about <span>never stop learning</span>, I am constantly training and learning about new and changing <span>technology</span> trends that way I bring an updated opinion of the Tech industry.</p>
            </div>
            <div className='aboutMe2'>
              <p>My full name is <span className='span1'>Cristian David Muñoz Camayo</span> and more than what I said before I am a dreamer, I am proudly <span className='span2'>Colombian</span> and in me you will find a human being with the desire to do his best to help others.</p>
            </div>
            <div className='aboutMeImg'>
              <img src="image/he.png" alt="" />
            </div>
          </div>
        </div>
        <div className='frame32'>
          <div className='frame34'>
            <img src="image/Escultures.png" alt="" />
            <p>Thanks for visit my website If you have any questions you can write me to any of my social networks, I am sure I will answer you.
            </p>
          </div>
          <div className='frame33'>
            <div className='logo'>
              <img src="image/Logo.png"  />
            </div>

            <div className='opsions'> 
              <h4>Home</h4>
              <h4>Portfolio</h4>
              <h4>Skills</h4>
              <h4>About Me</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
