import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Featured from "../Featured/Featured"

const Home = () => {
    return (
        <div className="max-w-5xl mx-auto">
             <h1 className="text-5xl font-bold items-center p-10"> Hi! This is my career hub page</h1>
            <Banner></Banner>
            <Books></Books>
            <br />
           <Featured></Featured>
        </div>
    );
};

export default Home;