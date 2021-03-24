import React, {useState} from 'react'

const Header = (props) => {
    return(
        <h1>{props.text}</h1>
    )
}

const Button = (props) => {
    return(
        <button onClick = {props.handleClick}>
        {props.text}
        </button>
    )
}

const Display = (num) => {
    if(num.good === 0 && num.bad === 0 && num.neutral === 0){
        return(
            <div>
                <p>No feedback given</p>
            </div>
        )
    } else {
    return(
        <div>
        <table>
            <tbody>
            <tr><td>Good votes: {num.good}</td></tr>
            <tr><td>Bad votes: {num.bad}</td></tr>
            <tr><td>Neutral votes: {num.neutral}</td></tr>
            </tbody>
        </table>
        </div>
    )
    }
}

const App = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...  The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [goods, setGoods] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    const [bads, setBads] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    const [neutrals, setNeutrals] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    
    const[selected, setSelected] = useState(0)
    const HandleNext = () =>{
        if(selected === 5){
            setSelected(0)
        } else {
            setSelected(selected + 1)
        }
    }

    const HandleGood = () => {
        const copyGood = {...goods}
        copyGood[selected] += 1
        setGoods(copyGood)
    }
    const HandleNeutral = () => {
        const copyNeutral = {...neutrals}
        copyNeutral[selected] += 1
        setNeutrals(copyNeutral)
    }
    const HandleBad = () => {
        const copyBads = {...bads}
        copyBads[selected] += 1
        setBads(copyBads)
    }

    const Reset = () => {
        setNeutrals({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
        setBads({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
        setGoods({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    }

    console.log('testing index: ' + selected +  ' bad value: ' + bads[selected])

    return(
        <div>
            <Header text = 'Give Feedback' />
            <blockquote><p><em><b><q>{anecdotes[selected]}</q></b></em></p></blockquote>
            <Button handleClick = {HandleGood} text = 'Good' />
            <Button handleClick = {HandleNeutral} text = 'Neutral' />
            <Button handleClick = {HandleBad} text = 'Bad' />
            <p><Button handleClick = {HandleNext} text = 'Next' /></p>
            <Header text = 'Statistics' />
            <Display good = {goods[selected]} bad = {bads[selected]} neutral = {neutrals[selected]} />
            <Button handleClick = {Reset} text = 'Reset' />
        </div>
    )
}

export default App