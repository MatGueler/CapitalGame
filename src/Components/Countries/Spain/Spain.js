import { useEffect, useState, useContext } from "react";
import { Container } from "../../Container/Container";
import { Button } from '../../Button/Button'
import { Main, Answers } from "./Spain-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../../Context/PontuationContext";

function Spain() {

    const [number, setNumber] = useState(0)

    const { pontuation, setPontuation, setPercentage, questions, SetQuestions } = useContext(PontuationContext)

    let navigate = useNavigate();

    function comparador() {
        return Math.random() - 0.5;
    }

    useEffect(() => {

        const capials =
            [
                { estado: 'Baden-Württemberg', capital: 'Stuttgart' },
                { estado: 'Baixa Saxônia', capital: 'Hanôver' },
                { estado: 'Baviera', capital: 'Munique' },
                { estado: 'Berlim', capital: 'Nenhuma' },
                { estado: 'Brandemburgo', capital: 'Potsdam' },
                { estado: 'Bremen', capital: 'Nenhuma' },
                { estado: 'Hamburgo', capital: 'Nenhuma' },
                { estado: 'Hesse', capital: 'Wiesbaden' },
                { estado: 'Mecklemburgo-Pomerânia Ocidental', capital: 'Schwerin' },
                { estado: 'Renânia do Norte-Vestfália', capital: 'Düsseldorf' },
                { estado: 'Renânia-Palatinado', capital: 'Mogúncia' },
                { estado: 'Sarre', capital: 'Saarbrücken' },
                { estado: 'Saxônia', capital: 'Dresda' },
                { estado: 'Saxônia-Anhalt', capital: 'Magdeburgo' },
                { estado: 'Schleswig-Holstein', capital: 'Kiel' },
                { estado: 'Turíngia', capital: 'Erfurt' }
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
                <h1>Capitais estadunidenses</h1>
                {(questions.length > 0 ? <ShowQuestion /> : '')}
            </Main>
        </Container>
    )
}

export default Spain;