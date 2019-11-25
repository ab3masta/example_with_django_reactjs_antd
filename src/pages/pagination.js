import React, { Component } from 'react';
import 'aos/dist/aos.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import park2 from "../static/img/park2.jpg";
import "../static/css/carousel.css";
class Pagination extends Component {
    render() {
        return (
            <div>
                <header>
                    <Carousel autoplay >
                        <div>
                            <img src={park2} alt=""></img>
                        </div>
                        <div>
                            <img src={park2} alt=""></img>
                        </div>

                        <div>
                            <img src={park2} alt=""></img>
                        </div>
                    </Carousel>
                </header>
            </div>
        );
    }
}


export default Pagination;