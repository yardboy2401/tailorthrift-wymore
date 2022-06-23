import React from 'react'
import Headshot1 from '../assets/JeffHead.png'
import Headshot2 from '../assets/MarcHead.png'
import Headshot3 from '../assets/MattHead.png'
import Headshot4 from '../assets/OscarHead.png'
import Headshot5 from '../assets/StevenHead.png'
import '../assets/css/OurTeam.css'

const About = () => {
  return (

    <div className="teamSection">
      <p className='teamTitle'>Our Team</p>
      <div className='teamContainer row'>
        
        <div className='teamCard col'>
          <img src={Headshot1} alt='' className='teamPic' />
        </div>

        <div className='teamText col '>
          <p className='TeamMemberName'>Jeff</p>
          <p className='TeamMemberBio'></p>
        </div>
        
        <div className='teamText col '>
          <p className='TeamMemberName'>Marc</p>
          <p className='TeamMemberBio'></p>
        </div>
        
        <div className='teamCard col team'>

          <img src={Headshot2} alt='' className='teamPic' />
        </div>

        <div className='teamCard col team'>

          <img src={Headshot3} alt='' className='teamPic' />
        </div>
        
        <div className='teamText col '>
          <p className='TeamMemberName'>Matthew</p>
          <p className='TeamMemberBio'></p>
        </div>
                
        <div className='teamText col '>
          <p className='TeamMemberName'>Oscar </p>
          <p className='TeamMemberBio'></p>
        </div>
        <div className='teamCard col team'>

          <img src={Headshot4} alt='' className='teamPic' />
        </div>

        
        <div className='teamCard col team'>

          <img src={Headshot5} alt='' className='teamPic' />
        </div>
        
        <div className='teamText col '>
          <p className='TeamMemberName'>Steven</p>
          <p className='TeamMemberBio'></p>
        </div>
      
      </div>


    </div>


  )
}

export default About