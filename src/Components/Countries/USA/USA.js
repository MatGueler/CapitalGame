import { useEffect, useState, useContext } from "react";
import { Container } from "../../Container/Container";
import { Button } from '../../Button/Button'
import { Main, Answers, Correction } from "./USA-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../../Context/PontuationContext";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Back } from '../../Button/BackButton'
import { TiArrowBack } from 'react-icons/ti';

function USA() {

    const [number, setNumber] = useState(0);
    const [correction, setCorrection] = useState([]);

    const { pontuation, setPontuation, setPercentage, questions, SetQuestions } = useContext(PontuationContext)

    let navigate = useNavigate();

    function comparador() {
        return Math.random() - 0.5;
    }

    useEffect(() => {

        const capials =
            [
                { estado: 'Alasca', capital: 'Juneau' },
                { estado: 'Alabama', capital: 'Montgomery' },
                { estado: 'Arizona', capital: 'Phoenix' },
                { estado: 'Arkansas', capital: 'Little Rock' },
                { estado: 'Califórnia', capital: 'Sacramento' },
                { estado: 'Carolina do norte', capital: 'Raleigh' },
                { estado: 'Carolina do Sul', capital: 'Colúmbia' },
                { estado: 'Colorado', capital: 'Denver' },
                { estado: 'Connecticut', capital: 'Hartford' },
                { estado: 'Dakota do Norte', capital: 'Bismarck' },
                { estado: 'Dakota do Sul', capital: 'Pierre' },
                { estado: 'Delaware', capital: 'Dover' },
                { estado: 'Flórida', capital: 'Tallahassee' },
                { estado: 'Geórgia', capital: 'Atlanta' },
                { estado: 'Havaí', capital: 'Honolulu' },
                { estado: 'Idaho', capital: 'Boise' },
                { estado: 'Illinois', capital: 'Springfield' },
                { estado: 'Indiana', capital: 'Indianápolis' },
                { estado: 'Iowa', capital: 'Des Moines' },
                { estado: 'Kansas', capital: 'Topeka' },
                { estado: 'Kentucky', capital: 'Frankfort' },
                { estado: 'Luisiana', capital: 'Baton Rouge' },
                { estado: 'Maine', capital: 'Augusta' },
                { estado: 'Maryland', capital: 'Annapolis' },
                { estado: 'Massachusetts', capital: 'Boston' },
                { estado: 'Michigan', capital: 'Lansing' },
                { estado: 'Minesota', capital: 'Saint Paul' },
                { estado: 'Mississippi', capital: 'Jackson' },
                { estado: 'Missouri', capital: 'Jefferson City' },
                { estado: 'Montana', capital: 'Helena' },
                { estado: 'Nebraska', capital: 'Lincoln' },
                { estado: 'Nevada', capital: 'Carson City' },
                { estado: 'Nova Hampshire', capital: 'Concord' },
                { estado: 'Nova Iorque', capital: 'Albany' },
                { estado: 'Nova Jérsei', capital: 'Trenton' },
                { estado: 'Novo México', capital: 'Santa Fé' },
                { estado: 'Ohio', capital: 'Columbus' },
                { estado: 'Oklahoma', capital: 'Oklahoma City' },
                { estado: 'Oregon', capital: 'Salem' },
                { estado: 'Pensilvânia', capital: 'Harrisburg' },
                { estado: 'Rhode Island', capital: 'Providence' },
                { estado: 'Tennessee', capital: 'Nashville' },
                { estado: 'Texas', capital: 'Austin' },
                { estado: 'Utah', capital: 'Salt Lake City' },
                { estado: 'Vermont', capital: 'Montpelier' },
                { estado: 'Virgínia', capital: 'Richmond' },
                { estado: 'Virgínia Ocidental', capital: 'Charleston' },
                { estado: 'Washington', capital: 'Olympia' },
                { estado: 'Wisconsin', capital: 'Madison' },
                { estado: 'Wyoming', capital: 'Cheyenne' }
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
            let sort = 0;
            sort = Math.floor(Math.random() * (questions.length - 1))
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
                <h1>Capitais estadunidenses</h1>
                {(questions.length > 0 ? <ShowQuestion /> : '')}
            </Main>
        </Container>
    )
}

export default USA;