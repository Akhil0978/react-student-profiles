import Student from "./components/Students";
import './App.css'
function App() {
  const students = [
  { id: 1, name: "Akhil", course: "MCA", age: 22 },
  { id: 2, name: "Rahul", course: "BCA", age: 17 },
  { id: 3, name: "Riya", course: "B.Tech", age: 21 }
];

  return (
    <>
    <h1>Students Profile </h1>
    {
      students.map((student) =>(
        <Student key={student.id} 
        name={student.name} 
        course={student.course}
        age={student.age} />
      ))
    }
    </>
  )
}

export default App
