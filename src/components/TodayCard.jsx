import React, { useEffect, useState } from 'react';
function TodayCard() {
  return (
    <div className="today-card">
      <h2>🌞 امروز</h2>
      <div className="date-row">
        <p>تاریخ میلادی: {now.toLocaleDateString('en-GB')}</p>
        <p>ساعت: {now.toLocaleTimeString('fa-IR')}</p>
      </div>
      <div className="zodiac-row">
        <span>{zodiac.emoji}</span>
        <p>{zodiac.name}</p>
      </div>
      <div className="event-row">
        <p>مناسبت امروز: جشن مهرگان</p>
      </div>
    </div>
  );
}

export default TodayCard;
