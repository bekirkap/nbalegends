import { data } from '../data/data'
import './legendscard.css'
const Legendscard = () => {
  return (
    <div className='card'>
    {
      data.map(player => <div>
        <img src={player.img} alt="" />
      </div> )
    }
</div>
  )
}

export default Legendscard