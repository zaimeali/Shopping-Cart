import React from 'react';

// Components
import Mobile from '../Mobile/Mobile';

const MobileList = () => {

    const db = [
        { id: 1, name: 'Nokia N90', price: 50.99 },
        { id: 2, name: 'Nokia N91', price: 51.98 },
        { id: 3, name: 'Nokia N92', price: 52.97 },
        { id: 4, name: 'Nokia N93', price: 53.96 }
    ];

    return (
        <div>
            {
                db.map(item => (
                    <Mobile name={ item.name } price={ item.price } key={ item.id } />
                ))
            }
        </div>
    )
}

export default MobileList
