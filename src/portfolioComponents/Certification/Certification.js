import React from 'react';
import img1 from '../../assets/Home/img/certification1.PNG';
import img2 from '../../assets/Home/img/certification2.PNG';
import img3 from '../../assets/Home/img/certification3.PNG';
import './Certification.css';


const Certification = () => {
  return (
      <div>
          <div className="cerification">
            <h1>Certification</h1>
            <div className='a-award'> 
            <img src={img1} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Coursera Certification Awards 2021</h4>
              <div className="a-award-desc">
                <h5>HTML, CSS, and Javascript for Web Developers</h5>
                an online non-credit course authorized by Johns Hopkins University and offered through
                Coursera
              </div>  
              <a href='https://coursera.org/share/9e51867bc49094fa09601a2802e83858'><button className='btn btn-primary'>LINK HERE</button></a> 
            </div>
            </div>
            <div className='a-award'> 
              <img src={img2} alt="" className="a-award-img" />
              <div className="a-award-texts">
                <h4 className="a-award-title">Coursera Certification Awards 2021</h4>
                <div className="a-award-desc">
                <h5>Front-End Web UI Frameworks and Tools:Bootstrap 4</h5>
                <p className="a-award-desc">
                  an online non-credit course authorized by The Hong Kong University of Science and
                  Technology and offered through Coursera
                </p>  
                </div>
                <a href='https://coursera.org/share/64689b205ca8b1a7882e21180b388883'> <button className='btn btn-primary'>LINK HERE</button></a> 
              </div>  
            </div>
            <div className='a-award'> 
              <img src= {img3} alt="" className="a-award-img" />
              <div className="a-award-texts">
                <h4 className="a-award-title">Coursera Certification Awards 2021</h4>
                <div className="a-award-desc">
                <h5> Front-End Web Development with React </h5>
                <p>
                  an online non-credit course authorized by The Hong Kong University of Science and
                  Technology and offered through Coursera
                </p>  
                </div>
                <a href='https://coursera.org/share/cd353078b2531400bf36ef7a0a0c4cf7'> <button className='btn btn-primary'>LINK HERE</button> </a>
              </div>
            </div>
          </div>
           
      </div>
  )
}

export default Certification;




