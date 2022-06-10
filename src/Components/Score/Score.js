import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container/Container";
import PontuationContext from "../Context/PontuationContext";
import { Menu, Main } from './Score-style'


function Score() {

    const { pontuation, percentage } = useContext(PontuationContext)

    let navigate = useNavigate()

    return (
        <Container>
            <Main>
                <h1>Você acertou</h1>
                <h2>{percentage}%</h2>
                <Menu onClick={() => navigate('/niveis')}>
                    Voltar ao início
                </Menu>
            </Main>
        </Container>
    )
}

export default Score;