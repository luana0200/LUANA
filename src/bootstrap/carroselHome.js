import Carousel from 'react-bootstrap/Carousel';

import './style.css'
import escovadental from '../bootstrap/imagens/escovadente.webp'
import Pampers from '../bootstrap/imagens/Pampers.jpg'
import Eudora from '../bootstrap/imagens/mae.jpg'


export default function CarroselHome() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={escovadental}
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Pampers}
                />

            </Carousel.Item>
            <Carousel.Item>
                <div className='fluir'>
                    <img className="d-block w-100" src={Eudora}/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
