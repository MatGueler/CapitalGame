import { useEffect, useState, useContext } from "react";
import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main, Answers, Correction } from "./Brazil-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../Context/PontuationContext";
import { Back } from '../Button/BackButton'
import { TiArrowBack } from 'react-icons/ti';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

function Brazil() {

    const [number, setNumber] = useState(0)
    const [correction, setCorrection] = useState([]);

    const { pontuation, setPontuation, setPercentage, questions, SetQuestions } = useContext(PontuationContext)

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
                { estado: 'Alagoas', capital: 'Maceió' },
                { estado: 'Tocantins', capital: 'Palmas' },
                { estado: 'Paraíba', capital: 'João Pessoa' },
                { estado: 'Maranhão', capital: 'São Luís' },
                { estado: 'Amazônas', capital: 'Manaus' },
                { estado: 'Pará', capital: 'Belém' },
                { estado: 'Paraná', capital: 'Curitiba' },
                { estado: 'Mato Grosso', capital: 'Cuiabá' },
                { estado: 'Santa Catarina', capital: 'Florianópolis' },
                { estado: 'Distrito Federal', capital: 'Brasília' },
                { estado: 'Acre', capital: 'Rio Branco' },
                { estado: 'Minas Gerais', capital: 'Belo Horizonte' },
                { estado: 'Mato Grosso do sul', capital: 'Campo Grande' },
                { estado: 'Piauí', capital: 'Teresina' },
                { estado: 'Amapá', capital: 'Macapá' },
                { estado: 'Roraima', capital: 'Boa Vista' },
                { estado: 'Ceará', capital: 'Fortaleza' },
                { estado: 'Goiás', capital: 'Goiânia' },
                { estado: 'Rondônia', capital: 'Porto velho' },
                { estado: 'Bahia', capital: 'Salvador' },
                { estado: 'Rio grande do Norte', capital: 'Natal' },
                { estado: 'Sergipe', capital: 'Aracaju' }
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
            <Back onClick={() => navigate('/niveis')}>
                <TiArrowBack color="white" size={30} />
            </Back>
            <Main>
                <h1>Capitais brasileiras</h1>
                {(questions.length > 0 ? <ShowQuestion /> : '')}
            </Main>
        </Container>
    )
}

export default Brazil;