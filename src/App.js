import Likes from "./Likes";
import Title from "./Title";
import Comments from "./Comments";
import Spin from "./components/Spin";
import {useSelector} from "react-redux";

function App() {
    const {error} = useSelector(state => state.app)

    return (
        <>
            <div className='w-full h-auto flex justify-center mt-20'>

                <div className='w-4/6 h-auto flex border border-black   p-1'>
                    <div className='w-4/6 h-auto flex flex-col border border-black'>
                        <div className='relative w-full h-86 bg-green-200'>
                            <img src="https://cdn.pixabay.com/photo/2021/12/26/19/36/christmas-tree-6895765_1280.jpg"  alt="logo"/>
                        </div>
                        <div className='flex flex-col my-2 w-full'>
                            <Title />
                            <Likes likes={'3'} />
                        </div>
                    </div>
                    <Spin />
                    {error && <p className='fixed top-0 left-0 w-full h-screen flex justify-center mt-5 text-red-500 '>{error}</p> }
                    <Comments />
                </div>
            </div>
        </>
    );
}

export default App;
