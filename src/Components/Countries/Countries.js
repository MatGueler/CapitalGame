import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main } from "./Countries-style";
import { useNavigate } from "react-router-dom";
import { Back } from '../Button/BackButton'
import { TiArrowBack } from 'react-icons/ti';

function Countries() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <Back onClick={() => navigate('/niveis')}>
                    <TiArrowBack color="white" size={30} />
                </Back>
                <h1>Escolha um país</h1>
                <Button onClick={() => navigate('/usa')} >
                    Estados Unidos
                    <img src="https://static.todamateria.com.br/upload/ba/nd/bandeira_americana_bb.jpg" />
                </Button>
                <Button onClick={() => navigate('/italia')} >
                    Itália<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" />
                </Button>
                <Button onClick={() => navigate('/alemanha')} >
                    Alemanha<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png" />
                </Button>
                <Button onClick={() => navigate('/argentina')} >
                    Argentina<img src="https://static.todamateria.com.br/upload/ba/nd/bandeira_argentina_bb.jpg" />
                </Button>
                <Button onClick={() => navigate('/espanha')} >
                    Espanha<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png" />
                </Button>
            </Main>
        </Container>
    )
}

export default Countries;