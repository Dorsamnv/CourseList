
const courseStatus = ["All", "Active", "Completed", "Upcoming"];

function Header() {
  return (
    <div>
      <h1>My Courses</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <button key={s}>{s}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;
