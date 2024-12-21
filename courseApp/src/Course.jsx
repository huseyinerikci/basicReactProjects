function Course({ course }) {
  const { author, title, desc, price, image } = course;
  return (
    <div className="courses">
      <img src={image} className="course-img" alt="" />

      <h2 className="course-title">{title}</h2>

      <p className="course-desc">{desc}</p>
      <div className="course-bottom">
        <h3>{author}</h3>
        <h4 className="course-price">
          {price}
          <span>$</span>
        </h4>
      </div>
    </div>
  );
}

export default Course;
