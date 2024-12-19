import { useState, useEffect } from 'react';
import { data } from './data';
import './App.css';

function App() {
    const [activeImg, setActiveImg] = useState(0);

    const handlePrev = () => {
        if (activeImg <= 0) {
            setActiveImg(data.length - 1);
        } else {
            setActiveImg(activeImg - 1);
        }
    };

    const handleNext = () => {
        setActiveImg((activeImg + 1) % data.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [activeImg]);

    return (
        <>
            <div className="carousel">
                <button onClick={handlePrev}>❮</button>
                {data.map((item, i) => (
                    <img
                        className={activeImg === i ? 'block img' : 'hide'}
                        src={item.url}
                        alt={item.alt}
                        title={item.alt}
                        key={item.id}
                    />
                ))}
                <button onClick={handleNext}>❯</button>
            </div>
        </>
    );
}

export default App;
