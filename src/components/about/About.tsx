import { FC } from "react"
import fish1 from '../../assets/fish1.svg'
import fish2 from '../../assets/fish2.svg'
import text1 from '../../assets/text1.svg'
import text2 from '../../assets/text2.svg'
import { MdArrowOutward } from "react-icons/md";
import './about.scss'

const About: FC = () => {
    return (
        <div className="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__left__top">
                        <img src={fish1} alt="" className="about__left__fish1" />
                        <img src={text1} alt="" className="about__left__text1" />
                    </div>
                    <button className="about__btn"><span>Learn More</span> <MdArrowOutward />
                    </button>
                    <div className="about__left__bottom">
                        <img src={fish2} alt="" className="about__left__fish2" />
                        <img src={text2} alt="" className="about__left__text2" />
                    </div>
                </div>

                <div className="about__right">
                    <div className="container1">
                        <h4 className="about__name">About Us / 私たちに関しては</h4>
                        <h3 className="about__title">Our mission is to bring true Japanese flavours to you.</h3>
                        <p className="about__desc">We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About