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