import { useEffect, useState, useContext } from "react";
import { Container } from "../../Container/Container";
import { Button } from '../../Button/Button'
import { Main, Answers } from "./Argentina-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../../Context/PontuationContext";

function Argentina() {

    const [number, setNumber] = useState(0)

    const { pontuation, setPontuation, setPercentage, questions, SetQuestions } = useContext(PontuationContext)

    let navigate = useNavigate();

    function comparador() {
        return Math.random() - 0.5;
    }

    useEffect(() => {

        const capials =
            [
                { estado: 'Buenos Aires', capital: 'La Plata' },
                { estado: 'Catamarca', capital: 'São F. do Vale de C.' },
                { estado: 'Chaco', capital: 'Resistência 	' },
                { estado: 'Chubut', capital: 'Rawson' },
                { estado: 'Córdova', capital: 'Córdova' },
                { estado: 'Correntes', capital: 'Correntes' },
                { estado: 'Entre Rios', capital: 'Paraná' },
                { estado: 'Formosa', capital: 'Formosa' },
                { estado: 'Jujuy', capital: 'San Salvador de J.' },
                { estado: 'La Pampa', capital: 'Santa Rosa' },
                { estado: 'A Rioja', capital: 'A Rioja' },
                { estado: 'Mendoza', capital: 'Mendoza' },
                { estado: 'Missões', capital: 'Pousadas' },
                { estado: 'Neuquém', capital: 'Neuquém' },
                { estado: 'Rio Negro', capital: 'Viedma' },
                { estado: 'Salta', capital: 'Salta' },
                { estado: 'San Juan', capital: 'São João' },
                { estado: 'San Luis', capital: 'São Luís' },
                { estado: 'Santa Cruz', capital: 'Rio Galegos' },
                { estado: 'Santa Fé', capital: 'Santa Fé' },
                { estado: 'Santiago do Estuário', capital: 'Santiago do Estuário' },
                { estado: 'Terra do Fogo', capital: 'Ushuaia' },
                {
                    estado: 'Tucumã', capital: 'São Miguel de Tucumã'
                }
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
                <h1>Capitais argentinas</h1>
                {(questions.length > 0 ? <ShowQuestion /> : '')}
            </Main>
        </Container>
    )
}

export default Argentina;