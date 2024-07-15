// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import './index.css';
import notificationsData from './notifications';

const Notification = ({ notification, onClear }) => {
  return (
    <div className="notification card">
      <h4>{notification.name}</h4>
      <p>{notification.message}</p>
      <button onClick={() => onClear(notification.id)}>Clear</button>
    </div>
  );
};

const App = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="app">
      <h1>Notifications ({notifications.length})</h1>
      <button onClick={clearAllNotifications}>Clear All</button>
      <div className="notifications-list">
        {notifications.map(notification => (
          <Notification key={notification.id} notification={notification} onClear={clearNotification} />
        ))}
      </div>
    </div>
  );
};

export default App;