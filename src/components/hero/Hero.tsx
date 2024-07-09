import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import avatar from '../../assets/avatar.svg'
import chop from '../../assets/chop.svg'
import text from '../../assets/text.svg'
import "./hero.scss";

const Hero: FC = () => {
    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__left">
                    <div className="hero__logo">
                        <h2 className="hero__logo__title">SUSHIMAN</h2>
                        <div className="hero__chop">
                            <img src={chop} alt="" />
                        </div>
                        <div className="hero__text">
                            <img src={text} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero__right">
                    <ul className="hero__nav__list">
                        <li className="hero__nav__item">Menu</li>
                        <li className="hero__nav__item">foods</li>
                        <li className="hero__nav__item">services</li>
                        <li className="hero__nav__item">about us</li>
                        <li className="hero__nav__item"><CiSearch /></li>
                    </ul>
                    <div className="container1">                    <h3 className="hero__title">Feel the taste of Japanese foods</h3></div>
                    <p className="hero__desc">Feel the taste of most populars Japanese foods from anywhere and anytime.</p>
                    <div className="hero__btns">
                        <button className="hero__order__btn">Order Now</button>
                        <button className="hero__play__btn"><FaPlay /> <span>How to Order</span></button>
                    </div>
                    <div className="hero__bottom">
                        <div className="hero__bottom__left">
                            <h2 className="hero__bottom__title">24K+</h2>
                            <p className="hero__bottom__desc">Happy Customer</p>
                        </div>
                        <div className="hero__bottom__right">
                            <img className="hero__bottom__img" src={avatar} alt="" />
                            <h3 className="hero__bottom__avatar">“This is the best Japanese food delivery service that ever exist”</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
