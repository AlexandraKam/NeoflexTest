import React, { useState } from 'react';
import CardsView from './CardsView';

function Store(props) {
    const [state, setState] = useState('view_list');
    // const icon = 'view_list';
    const { products } = props;
    
    return (
        <div className="main-content">
            <CardsView cards={products}/>
        </div>
    );
}

export default Store;