import PostList from './features/post/PostList';
import './App.css';
import AddPostForm from './features/post/AddPostForm';

function App() {
  return (
    <div className="App">
      <h2 className='text-center  text-2xl my-3'>Stempedia Task 1</h2>
      <div className='grid grid-cols-2 gap-10  h-[100vh] p-16'>
        <div className=''>
        <AddPostForm/>
        </div>
        <div><PostList/></div>
      </div>
      
    </div>
  );
}

export default App;
