import React from 'react';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/Header';
const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <h1>{courseName}</h1>
      <Header name={courseName}></Header>
      <Body courseParts={courseParts}></Body>
      <Footer props={courseParts}></Footer>
    </div>
  );
};

export default App;