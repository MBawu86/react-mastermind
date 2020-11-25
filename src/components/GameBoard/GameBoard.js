import GuessRow from '../GuessRow/GuessRow';

const GameBoard = (props)=>{
    return(
        <div className="component">
            GameBoard
            <div className='component'>
            <GuessRow />
            <GuessRow />
            </div>
        </div>
    )
}

export default GameBoard;

