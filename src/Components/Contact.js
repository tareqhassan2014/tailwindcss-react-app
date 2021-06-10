import React from 'react';
import EggNoodls from '../Images/Egg Noodls.jpg';
import eggSandwich from '../Images/egg sandwich.jpg';

const Contact = () => {
    return (
        <>
        <div className="flex flex-col justify-center bg-white h-screen font-mono py-40">
            <img src={EggNoodls} alt="egg noodls" className="h-full rounded md-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl md-2">Egg Muffins</h2>
                <p className="md-2">Cripsy,delicius, and nuturitious</p>
                <span>$16</span>
            </div>
        </div>

        <div className="flex flex-col justify-center bg-white h-screen font-mono py-40">
            <img src={eggSandwich} alt="egg noodls" className="h-full rounded md-20 shadow" />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl md-2">Egg Muffins</h2>
                <p className="md-2">Cripsy,delicius, and nuturitious</p>
                <span>$18</span>
            </div>
        </div>
            
        </>
    );
};

export default Contact;