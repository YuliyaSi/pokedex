import React, {useState} from 'react';
import {Button, Card, Carousel, ListGroup} from "react-bootstrap";

const Pokemon = ({pokemon}) => {
    const [show, setShow] = useState(false);

    const handleShowButton = () => {
        setShow(!show);
    }

    return (
        <Card style={{width: '15rem', margin: '10px'}}>
            <Carousel interval={null} variant="dark">
                <Carousel.Item>
                    <Card.Img variant="top" src={pokemon.sprites.front_default}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img variant="top" src={pokemon.sprites.front_female || pokemon.sprites.back_default}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img variant="top" src={pokemon.sprites.front_shiny}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img variant="top" src={pokemon.sprites.front_shiny_female || pokemon.sprites.back_shiny}/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                <Card.Text>
                    Type: {pokemon.types.map(item => item.type.name).join(', ')}
                </Card.Text>

                {show && <ListGroup variant="flush">
                    <ListGroup.Item>Weight: {pokemon.weight}</ListGroup.Item>
                    <ListGroup.Item>Height: {pokemon.height}</ListGroup.Item>
                </ListGroup>}
                <Button variant={'outline-dark'} onClick={handleShowButton}>More information</Button>
            </Card.Body>
        </Card>

    );
}

export default Pokemon;