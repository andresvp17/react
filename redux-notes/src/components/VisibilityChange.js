import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()

    return(
        <div>
          <input 
        type='radio' 
        name='filter' 
        onChange={() => dispatch(filterChange('ALL'))}
        /> All
          <input 
        type='radio' 
        name='filter' 
        onChange={() => dispatch(filterChange('IMPORTANT'))}
        /> Important
          <input 
        type='radio' 
        name='filter' 
        onChange={() => dispatch(filterChange('NONIMPORTANT'))}
        /> NonImportant
      </div>
    )
}

export default VisibilityFilter
