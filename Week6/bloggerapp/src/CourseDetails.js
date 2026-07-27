import { courses } from './data';

function levelBadge(level) {
  let badge;
  if (level === 'beginner') {
    badge = <span className="badge beginner">Beginner</span>;
  } else if (level === 'intermediate') {
    badge = <span className="badge intermediate">Intermediate</span>;
  } else {
    badge = <span className="badge advanced">Advanced</span>;
  }
  return badge;
}

function CourseItem({ course }) {
  return (
    <li>
      <strong>{course.name}</strong> — {levelBadge(course.level)}
      {}
      {(() => (course.level === 'advanced' ? <em> (Prerequisites required)</em> : null))()}
    </li>
  );
}

function CourseDetails() {
  return (
    <div className="panel">
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
