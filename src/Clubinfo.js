import React from 'react';
import './App.css';

const cellStyle = {
    border: "1px solid #ccc",
      padding: "8px",
    textAlign: "center"
  };

function Clubinfo({ club }) {
    return (
      <div style={{ color: club.primaryColor }}>
        <h1>{club.name}</h1>
  
        <div className="MainInfo">
          <div>
            <p><strong>Місто:</strong> {club.city}</p>
            <p><strong>Стадіон:</strong> {club.stadium}</p>
            <p><strong>Заснований у:</strong> {club.year} році</p>
            <p><strong>Головний тренер:</strong> {club.coach}</p>
          </div>
          <img src={club.logo} alt={`${club.name} logo`} />
        </div>
  
        <div
          className="Achievements"
          style={{
            backgroundImage: `url(${club.backgroundImage})`,
            border: `3px solid ${club.secondaryColor}`
          }}
        >
          <h3>🏆 Досягнення</h3>
          {club.achievements}
        </div>
  
        <div className="Squad">
          <h3 style={{ color: club.secondaryColor }}>👥 Склад команди:</h3>
          <table>
            <thead style={{ background: club.primaryColor, color: "white" }}>
              <tr>
                <th style={cellStyle}>#</th>
                <th style={cellStyle}>Фото</th>
                <th style={cellStyle}>Ім'я</th>
                <th style={cellStyle}>Позиція</th>
                <th style={cellStyle}>Вік</th>
              </tr>
            </thead>
            <tbody>
              {club.players.map((player, index) => (
                <tr key={index}>
                  <td style={cellStyle}>{index + 1}</td>
                  <td style={cellStyle}>
                    <img
                      src={player.photo}
                      alt={player.name}
                      width="100"
                      style={{ borderRadius: "100%"}}
                    />
                  </td>
                  <td style={cellStyle}>{player.name}</td>
                  <td style={cellStyle}>{player.position}</td>
                  <td style={cellStyle}>{player.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  

export default Clubinfo;
