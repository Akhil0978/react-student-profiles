import React from 'react'

function Student({ name, course, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <p>{age >= 18 ? "Eligible" : "Not Eligible"}</p>
      <hr />
    </div>
  );
}
export default Student