import React from 'react';
import './SkillShowcase.css'; // Import your styles

const SkillsShowcase = () => {
  const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', '...']; // Add your skills

  return (
    <div className="skills-container">
      <div className="image-container">
        {/* Your image goes here */}
        <img src="your-image.jpg" alt="Your Image" className="profile-image" />
      </div>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skill-item">
            {/* Circular icon for each skill */}
            <div className="skill-icon">{skill[0]}</div>
            <span className="skill-name">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsShowcase;