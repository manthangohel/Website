import React from 'react';
import ReactDOM from 'react-dom/client';



function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function List() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<List />);
    return (
        <div>
            <>
                <h1>Who lives in my garage?</h1>
                <ul>
                    {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
                </ul>
            </>
        </div>
    )
}

export default List