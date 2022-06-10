import { useEffect, useState, useContext } from "react";
import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main, Answers } from "./Brazil-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../Context/PontuationContext";

function Brazil() {

    const [questions, SetQuestions] = useState([])
    const [number, setNumber] = useState(0)

    const { pontuation, setPontuation, setPercentage } = useContext(PontuationContext)

    let navigate = useNavigate();

    function comparador() {
        return Math.random() - 0.5;
    }

    useEffect(() => {

        const capials =
            [
                { estado: 'Rio grande do sul', capital: 'Porto alegre' },
                { estado: 'Rio de Janeiro', capital: 'Rio de janeiro' },
                { estado: 'Espírito Santo', capital: 'Vitória' },
                { estado: 'São Paulo', capital: 'São Paulo' },
                { estado: 'Pernambuco', capital: 'Recife' },
                { estado: 'Alagoas', capital: 'Maceió' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
                // { estado: 'Rio grande do sul', capital: 'Porto alegre' }
            ]

        let questions = capials.sort(comparador)
        SetQuestions(questions)

        console.log(questions)

    }, [])

    function Choose(number, setNumber, item) {

        console.log(questions[(number)].capital)

        console.log(questions[(item)].capital)

        if (number < questions.length - 1) {
            let newNumber = number + 1;
            setNumber(newNumber)
        }
        else {
            alert('voce acabou!')
            navigate('/score')

        }

        if (questions[(number)].capital === questions[(item)].capital) {
            let point = pontuation + 1
            setPontuation(point)
            setPercentage(Math.floor((point / questions.length) * 100))
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
            </>
        )
    }


    return (
        <Container>
            <Main>
                <h1>Capitais brasileiras</h1>
                {(questions.length > 0 ? <ShowQuestion /> : '')}
            </Main>
        </Container>
    )
}

export default Brazil;