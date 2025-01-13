import {useState} from 'react'



function Home() {

    const [name, setName] = useState ();


    const updateName = () => {
        setName("matilda");
    }
    return (

        <div>
            <button className="home-btn" onClick={updateName}>
               Set name
            </button>
            <h2>Name: {name} </h2>
        </div>

    );
}
export default Home;
