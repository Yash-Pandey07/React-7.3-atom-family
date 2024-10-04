
import './App.css'
import { atom ,RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atom';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
  </RecoilRoot>
}
//Simple Atom
const todoAtom = atom({
    key : "todoAtom" ,
    default : {
      id: 1,
      title: "Go to Gym",
      description: "Hit the gym from 7-9"
    }
}) 
//Todo Function to use Atom
function Todo({id}) {
  //const todo = useRecoilValue(todoAtom);      //Simple Atom
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));     //Atom Family is passed with a specific ID

  return (
    <>
      {todo.title}<br></br>
      {todo.description}<br></br>
      <br />
    </>
  )
}

export default App