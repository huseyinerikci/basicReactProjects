import "./App.css";
import Header from "./Header";
import { courses } from "./data";
import Course from "./Course";
import "./css/course.css";
function App() {
  return (
    <div>
      <Header />
      <div className="course-container">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
