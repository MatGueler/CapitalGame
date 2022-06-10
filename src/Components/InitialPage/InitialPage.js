import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main } from "./InitialPage-style";
import { useNavigate } from "react-router-dom";


function InitialPage() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <h1>Country Game</h1>
                <img src="https://scontent.fvix1-1.fna.fbcdn.net/v/t31.18172-8/12957453_1016808185065066_2633369227133875057_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=973b4a&_nc_ohc=-6hNkliJ2JEAX8L0fk9&_nc_ht=scontent.fvix1-1.fna&oh=00_AT_uJ3CIDBMb83iYhvd7UJgbg2AGvcTtKozdxEEmW3owow&oe=62CA723D" />
                <Button back='white' onClick={() => navigate('/niveis')}>Vamos Jogar!</Button>
            </Main>
        </Container>
    )
}

export default InitialPage;