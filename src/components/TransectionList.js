import React from 'react'

const TransectionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                <li className='minus'>
                    Food <span>-$400</span><button className='del-btn'>X</button>
                </li>
                <li className='plus'>
                    Camera <span>+$1000</span><button className='del-btn'>X</button>
                </li>
                <li className='minus'>
                    Food <span>-$400</span><button className='del-btn'>X</button>
                </li>
                <li className='plus'>
                    Camera <span>+$1000</span><button className='del-btn'>X</button>
                </li>
            </ul>
        </div>
    )
}

export default TransectionList
