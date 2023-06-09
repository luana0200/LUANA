import { Link } from 'react-router-dom'
import CarroselHome from '../../bootstrap/carroselHome.js'
// import './estilo1.css'
import '../../components/Header/header.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'


import base from "../Beleza/imagens/base.png"
import batom from '../Beleza/imagens/batom.png'
import shampoo from '../Beleza/imagens/shampoomorango.png'
import rimel from '../Beleza/imagens/rimel.png'
import esmaltevermelho from '../Beleza/imagens/esmaltevermelho.png'
import perfume3 from '../Beleza/imagens/perfume3.png'
import saboneteliq from '../HPessoal/imagens H/sabonete liq.png'
import creme from '../HPessoal/imagens H/creme facial.png'

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Home() {
    return (
        <Container>
            <br />
            <CarroselHome />
            <br />

            <Row>
                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={base} />
                    <Card.Body>
                        <Card.Title><h2>Base Líquida Ultra Matte</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/BaseUltra'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={batom} />
                    <Card.Body>
                        <Card.Title><h2>Batom Líquido Matte Tint Rosé </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Batom'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={esmaltevermelho} />
                    <Card.Body>
                        <Card.Title><h2>Esmalte Vermelho Sofisticado</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Esmaltevermelho'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }} className=''>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={shampoo} />
                    <Card.Body>
                        <Card.Title><h2>Combo Frutas Vermelhas</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Shampoomorango'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={rimel} />
                    <Card.Body>
                        <Card.Title><h2>Máscara Para Cílios Super Up</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Rimel'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={saboneteliq} alt="sabonete liq" />
                    <Card.Body>
                        <Card.Title><h2>Sabonete Liquido Luz 200ml</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Saboneteliq'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={perfume3} alt="Perfume" />
                    <Card.Body>
                        <Card.Title><h2>La Victori Eau de Parfum 75ml</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Perfume3'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>



                <Card style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={creme} alt="creme" />
                    <Card.Body>
                        <Card.Title><h2>Creme Facial 100 g </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/CremeFacial'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Row>

                <div className='fluid '>
                <img src={visa12} alt="creme" />    
                <h5>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6985 | SAC – Serviço de Atendimento ao Cliente: 6985-3217, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h5><br />
                <p> <h5>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h5> </p>
                </div>
        </Container>
    )
}