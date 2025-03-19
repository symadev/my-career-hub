import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div className="max-w-5xl mx-auto">
             <h1 className="text-5xl font-bold p-10"> Hi! This is my career hub page</h1>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;