import React, { useState } from "react";
import { MapPin, Clock, Award, Bell, Briefcase } from "lucide-react";

const PSU_BLUE = "#003366";
const PSU_GOLD = "#FFB81C";
const PSU_LIGHT_BLUE = "#E8F0F7";

export default function InfoPopup({ popupInfo, onClose }) {
    if (!popupInfo) return null;

    const info = popupInfo;
    const [tab, setTab] = useState("events");

    const events = [...(info.happenings || [])].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    const achievements = [...(info.achievements || [])].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    const services = [...(info.services || [])].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    const announcements = [...(info.announcements || [])].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    return (
        <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
            <div
                style={{
                    background: `linear-gradient(135deg, ${PSU_BLUE} 0%, ${PSU_BLUE}dd 100%)`,
                    padding: "12px",
                    borderRadius: "8px 8px 0 0",
                    borderBottom: `3px solid ${PSU_GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                }}
            >
                <MapPin size={24} color={PSU_GOLD} />
                <h3
                    style={{
                        fontWeight: 700,
                        color: PSU_GOLD,
                        fontSize: 18,
                        margin: 0,
                    }}
                >
                    {info.name}
                </h3>
            </div>

            {/* DESCRIPTION */}
            {info.description && (
                <div
                    style={{
                        padding: "10px 12px",
                        background: PSU_LIGHT_BLUE,
                        color: "#333",
                        borderLeft: `4px solid ${PSU_GOLD}`,
                        fontSize: 14,
                        lineHeight: 1.5,
                    }}
                >
                    {info.description}
                </div>
            )}

            {/* TABS */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                    gap: 10,
                    padding: "10px 6px",
                }}
            >
                <TabButton
                    label="Events"
                    icon={<Clock size={16} />}
                    active={tab === "events"}
                    onClick={() => setTab("events")}
                />
                <TabButton
                    label="Achievements"
                    icon={<Award size={16} />}
                    active={tab === "achievements"}
                    onClick={() => setTab("achievements")}
                />
                <TabButton
                    label="Services"
                    icon={<Briefcase size={16} />}
                    active={tab === "services"}
                    onClick={() => setTab("services")}
                />
                <TabButton
                    label="Announcements"
                    icon={<Bell size={16} />}
                    active={tab === "announcements"}
                    onClick={() => setTab("announcements")}
                />
            </div>

            {/* CONTENT */}
            <div style={{ flex: 1, overflowY: "auto", padding: "0 6px" }}>
                {/* EVENTS */}
                {tab === "events" && (
                    <>
                        {events.length > 0 ? (
                            events.map((h, i) => (
                                <Section key={i}>
                                    <DateText date={h.created_at} />

                                    {h.happenings || "No event details."}

                                    {h.picture && (
                                        <img
                                            src={h.picture}
                                            alt="Event"
                                            className="your-css-class"
                                        />
                                    )}

                                    {h.video && (
                                        <video
                                            src={h.video}
                                            controls
                                            style={{
                                                width: "100%",
                                                borderRadius: 8,
                                                marginTop: 10,
                                                border: `2px solid ${PSU_BLUE}`,
                                            }}
                                        />
                                    )}
                                </Section>
                            ))
                        ) : (
                            <Section title="Events">
                                No events available.
                            </Section>
                        )}
                    </>
                )}

                {/* ACHIEVEMENTS */}
                {tab === "achievements" && (
                    <>
                        {achievements.length > 0 ? (
                            achievements.map((a, i) => (
                                <Section key={i}>
                                    <DateText date={a.created_at} />

                                    {a.achievements || "No achievement text."}

                                    {a.achievement_pic && (
                                        <ImageBox
                                            src={a.achievement_pic}
                                            alt="Achievement"
                                        />
                                    )}
                                </Section>
                            ))
                        ) : (
                            <Section title="Achievements">
                                No achievements available.
                            </Section>
                        )}
                    </>
                )}

                {/* SERVICES */}
                {tab === "services" && (
                    <>
                        {services.length > 0 ? (
                            services.map((s, i) => (
                                <Section key={i}>
                                    <DateText date={s.created_at} />

                                    {s.services || "No service description."}
                                </Section>
                            ))
                        ) : (
                            <Section title="Services">
                                No services available.
                            </Section>
                        )}
                    </>
                )}

                {/* ANNOUNCEMENTS */}
                {tab === "announcements" && (
                    <>
                        {announcements.length > 0 ? (
                            announcements.map((a, i) => (
                                <Section key={i}>
                                    <DateText date={a.created_at} />

                                    {a.announcement || "No announcement text."}
                                </Section>
                            ))
                        ) : (
                            <Section title="Announcements">
                                No announcements yet.
                            </Section>
                        )}
                    </>
                )}
            </div>

            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                style={{
                    marginTop: 12,
                    width: "100%",
                    background: "#fff",
                    color: PSU_BLUE,
                    border: `2px solid ${PSU_BLUE}`,
                    padding: "12px 16px",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 600,
                }}
            >
                Close
            </button>
        </div>
    );
}

function TabButton({ label, icon, active, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "14px 10px",
                borderRadius: 10,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                background: active ? PSU_BLUE : "#ffffff",
                color: active ? "#fff" : PSU_BLUE,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                fontSize: 13,
            }}
        >
            {icon}
            <span style={{ marginTop: 4 }}>{label}</span>
        </button>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <div
                style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: PSU_BLUE,
                    textTransform: "uppercase",
                    marginBottom: 6,
                }}
            >
                {title}
            </div>
            <div
                style={{
                    padding: 12,
                    borderRadius: 6,
                    background: "#fff",
                    border: `1.5px solid ${PSU_GOLD}`,
                    color: "#333",
                }}
            >
                {children}
            </div>
        </div>
    );
}

function ImageBox({ src, alt }) {
    return (
        <div
            style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
                overflow: "hidden",
                marginBottom: 16,
                border: `2px solid ${PSU_BLUE}`,
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        </div>
    );
}

// ✨ DATE Component for clean reuse
function DateText({ date }) {
    if (!date) return null;

    return (
        <div
            style={{
                fontSize: 12,
                color: "#666",
                marginBottom: 6,
                fontStyle: "italic",
            }}
        >
            {new Date(date).toLocaleString()}
        </div>
    );
}
