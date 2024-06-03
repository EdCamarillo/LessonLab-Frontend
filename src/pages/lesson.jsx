import Header from '../components/page-components/composite/header';
import SideBarLesson from '../components/page-components/composite/sideBarLesson';
import LessonComponent from '../components/page-components/composite/lessonComponent';

const Lesson = () => {
  return (
    <div>
        <Header />
        <SideBarLesson />
        <LessonComponent />
    </div>
  )
}

export default Lesson
