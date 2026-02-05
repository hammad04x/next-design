"use client";
import React from "react";

export default function AdventureCard({ title, img, className = "" }) {
  return (
    <div className={`adventure-card ${className}`}>
      <img src={img} className="w-full h-full object-cover" alt={title} />
      <div className="adventure-overlay" />
      <span className="adventure-title">{title}</span>
    </div>
  );
}
