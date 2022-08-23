import React from 'react'

import home from '../../assets/image_low.png';
import Goal from '../../components/goal/Goal';
import './Home.css'

const Home = () => {
  const goals = [
    {
      text: "Eos aspernatur rem"
    },
    {
      text: "Facilis neque ipsa"
    },
    {
      text: "Volup amet voluptas"
    },
    {
      text: "Rerum omnis sint"
    },
    {
      text: "Alias possimus"
    },
    {
      text: "Repellendus mollitia"
    },
  ];
  return (
    <div id='home' className='proxima__home section__margin section__padding'>
        <div className='proxima__home-img'>
            <img src={home} alt='home_proxima'></img>
        </div>
        <div className='proxima__home-container'>
          <div className='proxima__home-grid'>
              {
                goals.map((g,i)=>{
                  return <Goal key={i} goal_text={g.text}/>;
                })
              }                        
          </div>

        </div>
        
        
        
    </div>
  )
}

export default Home