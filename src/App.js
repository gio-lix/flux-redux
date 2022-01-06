import Likes from "./Likes";
import Title from "./Title";
import {Comment} from "postcss";
import Comments from "./Comments";

function App() {

    return (
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
                <Comments />
            </div>

        </div>
    );
}

export default App;
