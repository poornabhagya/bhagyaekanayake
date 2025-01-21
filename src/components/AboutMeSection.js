import React, { useState } from "react";
import "./AboutMeSection.css";
import profilePhoto from "./data/propic2.jpg"; 

function AboutMeSection() {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section className="about-me-section">
            {/* Header Section */}
            <h1 className="about-me-header">
                &lt;Who <span className="highlight">am I</span> /&gt;
            </h1>

            {/* Main Card */}
            <div className="about-me-card">
                {/* Left Side - Profile Image */}
                <div className="profile-card">
                    <img src={profilePhoto} alt="Profile" className="profile-pic" />
                </div>

                {/* Right Side - Interactive Cards */}
                <div className="content-card">
                    {/* Tab Titles */}
                    <div className="tab-titles">
                        <button 
                            className={activeTab === "education" ? "active-tab" : ""}
                            onClick={() => setActiveTab("education")}
                        >
                            Education
                        </button>
                        <button 
                            className={activeTab === "certificates" ? "active-tab" : ""}
                            onClick={() => setActiveTab("certificates")}
                        >
                            Certificates
                        </button>
                    </div>

                    {/* Card Content */}
                    <div className="tab-content">
                        {activeTab === "education" && (
                            <div className="education-card">
                                <p><strong>St. Sylvester's College, Kandy (2008-2020)</strong></p>
                                <p>GCE Advanced Level & GCE Ordinary Level</p>
                                <p></p>
                                <p><strong>IMBS Green Campus - Sri Lanka (2020 - 2021)</strong></p>
                                <p>Diploma in Human Resource Management</p>
                                <p><strong>Sri Lanka Institute of Information Technology (2021- Present)
                                </strong></p>
                                <p>BSc (Hons) in Information Technology </p>
                                <p><strong>South Eastern University of Sri Lanka (2022 - Present)</strong></p>
                                <p>Bachelor's degree in Information Communication Technology </p>
                            </div>
                        )}

                        {activeTab === "certificates" && (
                            <div className="certificate-card">
                                <p>Operating Systems Fundamentals offered by Akamai Networking</p>
                                <p>Introduction to Cloud Computing offered by IBM</p>
                                <p>MongoDB Certificates offered by MongoDB</p>
                                <p>Getting Started with Network Administration offered by LinkedIn Learning</p>
                                <p>Web Design for Beginners offered by University of Moratuwa</p>
                                <p>Introduction to Prompt Engineering for Generative AI offered by LinkedIn Learning</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;
