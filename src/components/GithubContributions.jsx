import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaCodeBranch, FaCode, FaFire } from "react-icons/fa";
import "./GithubContributions.css";

const GithubContributions = () => {
  const username = "Sanjay-Murugesan";

  const theme = {
    dark: [
      "#111827",
      "#1e293b",
      "#7f5af0",
      "#5b8cff",
      "#2cb67d",
    ],
  };

  return (
    <section className="github-calendar-section" id="github">

      <div className="github-calendar-card">

        {/* HEADER */}

        <div className="github-calendar-header">

          <div>

            <span className="github-calendar-label">
              GitHub Activity
            </span>

            <h2>Consistency Builds Great Software.</h2>

            <p className="github-calendar-note">
              Every square represents progress.
              Here's my coding journey throughout the year.
            </p>

          </div>

        </div>

        {/* STATS */}

        <div className="github-stats">

          <div className="github-stat-card">
            <FaFire className="stat-icon" />
            <h3>128+</h3>
            <span>Contributions</span>
          </div>

          <div className="github-stat-card">
            <FaGithub className="stat-icon" />
            <h3>20+</h3>
            <span>Repositories</span>
          </div>

          <div className="github-stat-card">
            <FaCode className="stat-icon" />
            <h3>Java</h3>
            <span>Primary Stack</span>
          </div>

          <div className="github-stat-card">
            <FaCodeBranch className="stat-icon" />
            <h3>2026</h3>
            <span>Active Year</span>
          </div>

        </div>

        {/* CALENDAR */}

        <div className="github-calendar-wrapper">

          <GitHubCalendar
            username={username}
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            showWeekdayLabels
            theme={theme}
          />

        </div>

        {/* FOOTER */}

        <div className="github-footer">

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            <FaGithub />
            View GitHub Profile
          </a>

        </div>

      </div>

    </section>
  );
};

export default GithubContributions;