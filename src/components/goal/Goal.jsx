import React from 'react'
import PropTypes from 'prop-types';
import './Goal.css'
import { RiCheckFill } from 'react-icons/ri';
const Goal = ({goal_text}) => {
  return (
    <div className='proxima__goal'>
        <div className='proxima__goal-check'>
            <RiCheckFill/>
        </div>
        <div className='proxima__goal-text'>
            <p>
                {goal_text}
            </p>
        </div>
    </div>
  )
}

Goal.propTypes = {
    goal_text: PropTypes.string.isRequired
}


export default Goal