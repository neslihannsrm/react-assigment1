import {useState} from 'react'



function Home() {
    
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0); 
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Matilda");
    }
    
    const IncrementAge  = () => {
        setAge(age+ 1);
    }

    const toggleEmployment = () => {
        if (isEmployed) {
            setIsEmployed(false);
        } else {
            setIsEmployed(true);
        }
    }


    return (
        <div>
            <button className='home-btn'onClick={updateName}> 
                Set name!
            </button>
            <h2>Name: {name}</h2>

            <button className='home-btn'onClick={IncrementAge}>
                IncrementAge 
            </button>
            <h2>Age: {age} </h2>

            <button className='home-btn'onClick={toggleEmployment}>
                Toggle
            </button>
            <h2>isEmployed: {isEmployed ? "Yes" : "No" }  </h2>
        </div>
    );
}
export default Home;
