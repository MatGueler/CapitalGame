import { useEffect, useState, useContext } from "react";
import { Container } from "../../Container/Container";
import { Button } from '../../Button/Button'
import { Main, Answers, Correction } from "./Italy-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../../Context/PontuationContext";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

function Italy() {

    const [number, setNumber] = useState(0);
    const [correction, setCorrection] = useState([])

    const { pontuation, setPontuation, setPercentage, questions, SetQuestions } = useContext(PontuationContext)

    let navigate = useNavigate();

    function comparador() {
        return Math.random() - 0.5;
    }

    useEffect(() => {

        const capials =
            [
                { estado: 'Piemonte', capital: 'Turim' },
                { estado: 'Vale de Aosta', capital: 'Aosta' },
                { estado: 'Lombardia', capital: 'Milão' },
                { estado: 'Trentino-Alto Ádige', capital: 'Trento' },
                { estado: 'Vêneto', capital: 'Veneza' },
                { estado: 'Friul-Veneza Júlia', capital: 'Trieste' },
                { estado: 'Emília-Romanha', capital: 'Bolonha' },
                { estado: 'Marcas', capital: 'Ancona' },
                { estado: 'Abruzos', capital: 'Áquila' },
                { estado: 'Molise', capital: 'Campobasso' },
                { estado: 'Apúlia', capital: 'Bari' },
                { estado: 'Basilicata', capital: 'Potenza' },
                { estado: 'Calábria', capital: 'Catanzaro' },
                { estado: 'Campânia', capital: 'Nápoles' },
                { estado: 'Lácio', capital: 'Roma' },
                { estado: 'Úmbria', capital: 'Perúgia' },
                { estado: 'Toscana', capital: 'Florença' },
                { estado: 'Ligúria', capital: 'Gênova' },
                { estado: 'Sardenha', capital: 'Cálhari' },
                { estado: 'Sicília', capital: 'Palermo' }
            ]

        let questions = capials.sort(comparador)
        SetQuestions(questions)

    }, [])

    function Choose(number, setNumber, item) {

        if (number < questions.length - 1) {
            let newNumber = number + 1;
            setNumber(newNumber)
        }
        else {
            alert('voce acabou!')
            navigate('/score')

        }

        if (questions[(number)].capital === questions[(item)].capital) {
            let point = pontuation + 1;
            let u = correction
            u.push(<BsFillCheckCircleFill color="green" />)
            setCorrection(u)
            console.log(correction)
            setPontuation(point)
            setPercentage(Math.floor((point / questions.length) * 100))
        }
        else {
            let u = correction
            u.push(<AiFillCloseCircle color="red" />)
            setCorrection(u)
        }
    }

    function ShowQuestion() {


        let alternatives = [number]

        let letters =
            [
                'A', 'B', 'C', 'D'
            ]

        while (alternatives.length < 4) {
            let sort = Math.floor(Math.random() * 6);
            let verificador = 0;
            for (let counter = 0; counter < alternatives.length; counter++) {
                if (alternatives[counter] === sort) {
                    verificador += 1;
                }
            }
            if (verificador === 0) {
                alternatives.push(sort)
            }
        }

        alternatives = alternatives.sort(comparador)

        return (
            <>
                <h2>Qual a capital do estado de {questions[(number)].estado}?</h2>
                <Answers>
                    {alternatives.map((item, index) => <Button key={index} onClick={() => Choose(number, setNumber, item)}> {letters[index]}) {questions[(item)].capital}</Button>)}
                </Answers>
                <Correction>
                    {correction.map((item, index) => <h2 key={index}>{item}</h2>)}
                </Correction>
            </>
        )
    }


    return (
        <Container>
            <Main>
                <h1>Capitais estadunidenses</h1>
                {(questions.length > 0 ? <ShowQuestion /> : '')}
            </Main>
        </Container>
    )
}

export default Italy;