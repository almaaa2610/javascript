import Navbar from '../components/Navbar'
import  '../styles/Home.css'
import {HomeSection} from '../data/HomeSection'
import {coursesSection} from '../data/CoursesSection'
import parse from 'html-react-parser'

import Footer from '../components/Footer'
function Home() {
  return (
   <>
  <Navbar />
  <div className="Wrapper">

  <section id="home">
            <img src= {HomeSection.image} />
            <div className="kolom">
            {parse (HomeSection.content)}
            </div>
        </section>
  </div>
  <section id="courses">
            <div className="kolom">
            {parse (coursesSection.content)}
            </div>
            <img src={coursesSection.image} />
        </section>
  <Footer />
   </>
  )
}

export default Home
