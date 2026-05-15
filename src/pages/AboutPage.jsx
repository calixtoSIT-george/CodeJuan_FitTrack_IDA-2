import { useState, useEffect } from "react";
import "./AboutPage.css";

function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const features = [
    { icon: "🏋️", label: "Workout Tracking" },
    { icon: "📈", label: "Progress Insights" },
    { icon: "🔥", label: "Streak Streaks" },
    { icon: "🎯", label: "Goal Setting" },
  ];

  return (
    <div className={`about-page ${visible ? "visible" : ""}`}>
      <div className="top-bar">
        <h2>About</h2>
      </div>

      <div className="about-capsule">
        <div className="capsule-header">
          <div className="capsule-icon">💪</div>
          <div>
            <p className="capsule-title">FitTrack</p>
            <p className="capsule-subtitle">Your personal fitness companion</p>
          </div>
        </div>

        <div className="capsule-divider" />

        <p className="capsule-body">
          FitTrack helps you track workouts and stay consistent. Whether you're
          just starting out or leveling up, we keep your progress clear and your
          motivation high.
        </p>

        <div className="feature-tags">
          {features.map((f) => (
            <span className="feature-tag" key={f.label}>
              <span className="feature-tag-icon">{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;