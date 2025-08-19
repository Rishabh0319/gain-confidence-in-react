import Comment from './components/Comment';
import Reply from './components/Reply';

const App = () => {
  return (
    <div className='flex items-center flex-col w-[60%] m-auto'>
      <div className=' h-[80vh] w-full flex flex-col gap-4 p-4 overflow-auto'>
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className='w-full p-4'>
        <Reply />
      </div>
    </div>
  )
}

export default App