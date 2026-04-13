import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import "./GithubContributions.css";

const GithubContributions = () => {
    const username = "Sanjay-Murugesan";

    const theme = {
        dark: [
            "#0f172a",
            "#111827",
            "#15803d",
            "#16a34a",
            "#22c55e"
        ],
    };

    return (
        <section className="github-calendar-section" id="github">
            <div className="github-calendar-card">
                <div className="github-calendar-header">
                    <div>
                        <p className="github-calendar-label">GitHub Contributions</p>
                        <h2>Contributions by @{username}</h2>
                    </div>
                    <p className="github-calendar-note">Yearly contribution heatmap shown below</p>
                </div>

                <div className="github-calendar-wrapper">
                    <GitHubCalendar
                        username={username}
                        blockSize={14}
                        blockMargin={5}
                        fontSize={14}
                        theme={theme}
                        showWeekdayLabels={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default GithubContributions;
