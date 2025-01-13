function Home(){

    let count = 0;
    const handleEvent = (name) => {
       if (count < 3) {
        count++
        console.log(`${name} you clicked me ${count} time/s`)
       } else {
        console.log(`${name} Stop clicking me!`)
       }
    }

    return (

        <div>
            <button className="home-btn" onClick={() => handleEvent("Matilda")}>
                Click me!
            </button>
        </div>

    );
}
export default Home;
