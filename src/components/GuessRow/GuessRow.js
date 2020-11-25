import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props)=>{
    return(
        <div className="components">
            GuessRow
            <div className='component'>
            <GuessPegs/>
            </div>
            <div className='component'>
            <GuessScore/>
            </div>
        </div>
    )
}

export default GuessRow;
