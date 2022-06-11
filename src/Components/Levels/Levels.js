import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Back } from '../Button/BackButton'
import { Container } from "../Container/Container";
import { Main } from './Levels-style'
import { TiArrowBack } from 'react-icons/ti';


function Levels() {

    let navigate = useNavigate();


    return (
        <Container>
            <Main>
                <Back onClick={() => navigate('/')}>
                    <TiArrowBack color="white" size={30} />
                </Back>
                <h1>Estilo de jogo</h1>
                <Button back='yellow' onClick={() => navigate('/brasil')}>Brasil</Button>
                <Button back='orange' onClick={() => navigate('/paises')}>Países</Button>
                <Button back='red' onClick={() => alert('Esse modo estará disponível em breve')}>Continentes</Button>
            </Main>
        </Container>
    )
}

export default Levels;