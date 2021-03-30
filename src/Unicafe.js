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
                <p><b>Votes For Quote {num.current + 1}</b></p>
                <p><em>No feedback given</em></p>
            </div>
        )
    } else {
    return(
        <div>
        <p><b>Votes For Quote {num.current + 1}</b></p>
        <table>
            <tbody>
            <tr><td>Good votes: {num.good}</td></tr>
            <tr><td>Bad votes: {num.bad}</td></tr>
            <tr><td>Neutral votes: {num.neutral}</td></tr>
            </tbody>
        </table>
        <p></p>
        </div>
    )
    }
}

const App = () => {

    const anecdotes = [{
        text: 'If it hurts, do it more often.',
        id: 1
    },
    {
        text: 'Adding manpower to a late software project makes it later!',
        id: 2
    },
    {
        text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...  The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        id: 3
    },
    {
        text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        id: 4
    },
    {
        text: 'Premature optimization is the root of all evil.',
        id: 5
    },
    {
        text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        id: 6
    }]

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
        console.log('pressed good')
    }
    const HandleNeutral = () => {
        const copyNeutral = {...neutrals}
        copyNeutral[selected] += 1
        setNeutrals(copyNeutral)
        console.log('pressed neutral')
    }
    const HandleBad = () => {
        const copyBads = {...bads}
        copyBads[selected] += 1
        setBads(copyBads)
        console.log('pressed bad')
    }

    const Reset = () => {
        const zeroNeutral = {...neutrals}
        zeroNeutral[selected] = 0
        setNeutrals(zeroNeutral)
        const zeroBads = {...bads}
        zeroBads[selected] = 0
        setBads(zeroBads)
        const zeroGoods = {...goods}
        zeroGoods[selected] = 0
        setGoods(zeroGoods)
    }
    console.log("index at: " + selected)
    return(
        <div>
        
            <Header text = 'Give Feedback' />
            <blockquote><p><em><b><q> {anecdotes[selected].text} </q></b></em></p></blockquote>
            <Button handleClick = {HandleGood} text = 'Good' />
            <Button handleClick = {HandleNeutral} text = 'Neutral' />
            <Button handleClick = {HandleBad} text = 'Bad' />
            <p><Button handleClick = {HandleNext} text = 'Next' /></p>
            <Header text = 'Statistics' />
            <Display good = {goods[selected]} bad = {bads[selected]} neutral = {neutrals[selected]} current = {selected} />
            <Button handleClick = {Reset} text = 'Reset' />

        </div>
    )
}

export default App