import React from "react";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <div style={{ padding: "1rem 2rem", borderRadius: "10px", margin: "auto", maxWidth: "80rem" }}>
      <Typography variant="h3" gutterBottom>
        About Codegemini
      </Typography>
      <Typography variant="body1" gutterBottom>
        Codegemini is a coding blog website dedicated to providing high-quality tutorials, articles, and resources for developers of all levels. Our mission is to empower and inspire developers to enhance their skills and stay up-to-date with the latest trends in the software development industry.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1" gutterBottom mb={3}>
        Meet our talented team of writers, editors, and developers who work tirelessly to bring you valuable content and resources.
      </Typography>
      <div className="team-members">
        <div className="team-member">
          <Typography variant="h5" gutterBottom>
            Soham Waghmare
          </Typography>
          <Typography variant="body2" gutterBottom>
            John is a senior software engineer with over 10 years of experience in web development. He specializes in front-end technologies and is passionate about creating intuitive user interfaces.
          </Typography>
        </div>
        <div className="team-member">
          <Typography variant="h5" gutterBottom>
            Jane Smith
          </Typography>
          <Typography variant="body2" gutterBottom>
            Jane is a full-stack developer with expertise in backend technologies. She enjoys solving complex problems and building scalable applications.
          </Typography>
        </div>
      </div>
      <style>
        {`
                .team-members {
                    display: flex;
                    gap: 20px;
                    flex-direction: row;
                    
                }

                .team-member {
                    padding: 0.75rem;
                    border: 2px solid #ccc;
                    border-radius: 1rem;
                    background-color: #222;
                    flex: 1;
                }

                p {
                    color: #ccc;
                }
            `}
      </style>
    </div>
  );
}
