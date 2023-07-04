import { useState } from 'react'
import './netflix.css'
import {Link,useNavigate} from 'react-router-dom'
import netflixLogo from './asset/images/Netflix-logo-red-black-png.png'
import backgroundImg from './asset/images/background.jpg'
import searchIcon from './asset/images/search-icon-256x256.png'
import bellIcon from './asset/images/bell_icon.png'
import userIcon from './asset/images/usericon.png'
import WednesdayIcon from './asset/images/Wednesday-Logo.png'
import playicon from './asset/images/play_icon.png'
import infoicon from './asset/images/info.png'
import v1 from './asset/videos/Creed3.mp4'
import v2 from './asset/videos/MyFault.mp4'
import v3 from './asset/videos/Samaritan.mp4'
import v4 from './asset/videos/Top-Gun.mp4'


export default function Netfilx() {
    const [footerData, setFooterData] = useState(['FAQ',
        'Help Center',
        'Account',
        'Media Center',
        'Investor Relations',
        'Jobs',
        'Netflix Shop',
        'Redeem Gift Cards',
        'Buy Gift Cards',
        'Ways to Watch',
        'Terms of Use',
        'Privacy',
        'Cookie Preferences',
        'Corporate Information',
        'Contact Us',
        'Speed Test',
        'Legal Notices',
        'Only on Netflix',
        'Do Not Sell or Share My Personal Information'])
    const navigate = useNavigate()



    const handlePlay = (e) => {
        try {
            e.target.play()
        } catch (error) {
        }
    }


    return (
        <div className='Netfilx'>
            <img className='background-img' src={backgroundImg} alt='background' />
            <div className='background-mask' />
            <div className='background-mask2' />
            <nav>
                <div className='nav-left-container'>
                    <img src={netflixLogo} onClick={()=>navigate(-1)}/>
                    <a>Home</a>
                    <a>TV Shows</a>
                    <a>Movies</a>
                    <a>New & Popular</a>
                    <a>My List</a>
                    <a>Browse by Languages</a>
                </div>
                <div className='nav-right-container'>
                    <img src={searchIcon} alt='search' />
                    <a>Children</a>
                    <img src={bellIcon} alt='alert' />
                    <img src={userIcon} alt='user' />
                </div>
            </nav>
            <main>
                <div className='background-container'>
                    <div className='background-left-container'>
                        <img src={WednesdayIcon} alt='WednesdayIcon' />
                        {/* <div className='background-left-subtitle-container'>#2 in TV Shows Today</div>
                        <div className='background-left-content-container'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div> */}
                        <div className='background-left-cta-container'>
                            <div className='playBtn-container'>
                                <img className='playIcon' src={playicon} alt='playicon' />
                                <span>Play</span>
                            </div>
                            <div className='moreinfoBtn-container'>
                                {/* <img className='infoIcon' src={infoicon} alt='infoicon'/> */}
                                <span>More Info</span>
                            </div>
                        </div>
                    </div>
                    <div className='lines-container'>
                        <div className='line-images-container'>
                            <div className='title'>TV Shows Featuring a Strong Female Lead</div>
                            <div className='line-images'>
                                <button className='LBtn'>&lt;</button>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v4} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className='RBtn'>&gt;</button>
                            </div>
                        </div>
                        <div className='line-images-container'>
                            <div className='title'>TV Shows Featuring a Strong Female Lead</div>
                            <div className='line-images'>
                                <button className='LBtn'>&lt;</button>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v4} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v4} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className='RBtn'>&gt;</button>
                            </div>
                        </div>
                        <div className='line-images-container'>
                            <p className='title'>TV Shows Featuring a Strong Female Lead</p>
                            <div className='line-images'>
                                <button className='LBtn'>&lt;</button>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v4} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v3} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <video className='video' muted onLoadedMetadata={e => e.target.currentTime = 3} onMouseEnter={e => handlePlay(e)} onMouseLeave={e => { e.target.currentTime = 3; e.target.pause() }}>
                                    <source src={v4} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className='RBtn'>&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer1-call-container">
                    <span>Questions? Call </span><a href="tel:1-844-505-2993">1-844-505-2993</a>
                </div>
                <div className="footer2-link-container">
                    {footerData.map((item) => (
                        <a href="#">{item}</a>
                    ))}
                </div>
                <div className="footer3-toggle-container">
                    <select>
                        <option>English</option>
                        <option>Español</option>
                    </select>
                </div>
            </footer>
        </div>
    )
}