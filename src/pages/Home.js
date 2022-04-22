import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div className='home'>
        <div className='banner-container'></div>
        <div className='section pb-5 pt-5'>
          <h3 className='heading'>Щотижня відправляємо допомогу</h3>
          <div className='video-container mt-5'>
            <div className='video-section mb-3'>
              <img src='images/video-section.png'/>
            </div>
            <section>
              <h3 className='heading mb-5 mt-5'>Заголовок Опис</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea magni ipsum similique minima impedit delectus, dolores, cum quidem voluptates eligendi nisi unde voluptate est ex, molestiae distinctio atque doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </section>
          </div>
        </div>
        <div className='section pt-5 pb-5'>
          <h3 className='heading mb-5'>Наша команда</h3>
          <div className='team-container mb-5'>
            <div className='team-item'>
              <img src='images/user.png' />
              <h4>І'мя</h4>
            </div>
            <div className='team-item'>
              <img src='images/user.png' />
              <h4>І'мя</h4>
            </div>
            <div className='team-item'>
              <img src='images/user.png' />
              <h4>І'мя</h4>
            </div>
            <div className='team-item'>
              <img src='images/user.png' />
              <h4>І'мя</h4>
            </div>
          </div>
          <section className='mb-3'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea magni ipsum similique minima impedit delectus, dolores, cum quidem voluptates eligendi nisi unde voluptate est ex, molestiae distinctio atque doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </section>
        </div>
        <div className='section pt-5 pb-5'>
            <section>
              <h3 className='heading mb-5'>Діяльність</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea magni ipsum similique minima impedit delectus, dolores, cum quidem voluptates eligendi nisi unde voluptate est ex, molestiae distinctio atque doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </section>
            <div className='activity-container'>
              <div className='activity-item'>
                <img src='images/handshake-651818_1280.png'/>
                <h5>діяльність вид</h5>
              </div>
              <div className='activity-item'>
                <img src='images/handshake-651818_1280.png'/>
                <h5>діяльність вид</h5>
              </div>
              <div className='activity-item'>
                <img src='images/handshake-651818_1280.png'/>
                <h5>діяльність вид</h5>
              </div>
            </div>   
        </div>
        <div className='section pt-5 pb-5'>
          <div className='partners-container pb-5'>
            <h3 className='heading mb-5'>Партнери</h3>
            <div className='parnters'>
              <div className='partners-item'>
                <img src='images/handshake-651818_1280.png'/>
              </div>
              <div className='partners-item'>
                <img src='images/handshake-651818_1280.png'/>
              </div>
              <div className='partners-item'>
                <img src='images/handshake-651818_1280.png'/>
              </div>
              <div className='partners-item'>
                <img src='images/handshake-651818_1280.png'/>
              </div>
            </div>
          </div>
        </div>
        <div className='section pt-5 pb-5'>
          <h3 className='heading mb-5'>Допомогти</h3>
          <div className='buttons-container'>
            <Button href="#donate" variant="link">Donate</Button>
            <Button href="#help" variant="link" >Help now</Button>
          </div>
        </div>
    </div>
    )
}

export default Home;