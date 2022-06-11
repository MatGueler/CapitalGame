import { useEffect, useState, useContext } from "react";
import { Container } from "../../Container/Container";
import { Button } from '../../Button/Button'
import { Main, Answers, Correction } from "./Spain-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../../Context/PontuationContext";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Back } from '../../Button/BackButton'
import { TiArrowBack } from 'react-icons/ti';

function Spain() {

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
                { estado: 'Álava', capital: 'Vitoria-Gasteiz' },
                { estado: 'Albacete', capital: 'Albacete' },
                { estado: 'Alicante', capital: 'Alicante' },
                { estado: 'Almería', capital: 'Almería' },
                { estado: 'Astúrias', capital: 'Oviedo' },
                { estado: 'Ávila', capital: 'Ávila' },
                { estado: 'Badajoz', capital: 'Badajoz' },
                { estado: 'Ilhas Baleares', capital: 'Palma de Mallorca' },
                { estado: 'Barcelona', capital: 'Barcelona' },
                { estado: 'Biscaia', capital: 'Bilbao' },
                { estado: 'Burgos', capital: 'Burgos' },
                { estado: 'Cáceres', capital: 'Cáceres' },
                { estado: 'Cádis', capital: 'Cádis' },
                { estado: 'Cantábria', capital: 'Santander' },
                { estado: 'Castelló', capital: 'Castelló' },
                { estado: 'Ceuta', capital: 'Ceuta' },
                { estado: 'Cidade Real', capital: 'Cidade Real' },
                { estado: 'Córdova', capital: 'Córdova' },
                { estado: 'Corunha', capital: 'Corunha' },
                { estado: 'Cuenca', capital: 'Cuenca' },
                { estado: 'Gerunda', capital: 'Girona' },
                { estado: 'Granada', capital: 'Granada' },
                { estado: 'Guadalajara', capital: 'Guadalajara' },
                { estado: 'Guipúscoa', capital: 'São Sebastião' },
                { estado: 'Huelva', capital: 'Huelva' },
                { estado: 'Huesca', capital: 'Huesca' },
                { estado: 'Jaén', capital: 'Jaén' },
                { estado: 'La Rioja', capital: 'Logronho' },
                { estado: 'León', capital: 'Leão' },
                { estado: 'Lérida', capital: 'Lérida' },
                { estado: 'Lugo', capital: 'Lugo' },
                { estado: 'Madrid', capital: 'Madrid' },
                { estado: 'Málaga', capital: 'Málaga' },
                { estado: 'Melilla', capital: 'Melilla' },
                { estado: 'Múrcia', capital: 'Múrcia' },
                { estado: 'Navarra', capital: 'Pamplona' },
                { estado: 'Ourense', capital: 'Ourense' },
                { estado: 'Palência', capital: 'Palência' },
                { estado: 'Las Palmas', capital: 'Las Palmas' },
                { estado: 'Pontevedra', capital: 'Pontevedra' },
                { estado: 'Salamanca', capital: 'Salamanca' },
                { estado: 'Santa Cruz de Tenerife', capital: 'Santa Cruz de Tenerife' },
                { estado: 'Saragoça', capital: 'Saragoça' },
                { estado: 'Segóvia', capital: 'Segóvia' },
                { estado: 'Sevilha', capital: 'Sevilha' },
                { estado: 'Sória', capital: 'Sória' },
                { estado: 'Tarragona', capital: 'Tarragona' },
                { estado: 'Teruel', capital: 'Teruel' },
                { estado: 'Toledo', capital: 'Toledo' },
                { estado: 'Valência', capital: 'Valência' },
                { estado: 'Valladolid', capital: 'Valladolid' },
                { estado: 'Zamora', capital: 'Zamora' }
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

export default Spain;