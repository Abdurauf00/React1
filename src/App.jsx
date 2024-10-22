import React, { useState } from 'react';
import './style.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [groups, setGroups] = useState({
    group1: ['Акомуто Херовато', 'Язагит Лера', 'Яна Солях'],
    group2: ['Иван Жгуевреев', 'Бейж Идов', 'Лена Головач'],
    group3: ['Гена Цидармян', 'Рулон Обоев', 'Яна Цист']
  });

  const OnChangeF = (e) => {
    setInputValue(e.target.value);
  };

  const Grouppp = (group) => {
    if (!inputValue) {
      alert('Поле ввода пустоe');
      return;
    }

    setGroups((prevGroups) => ({
      ...prevGroups,
      [group]: [...prevGroups[group], inputValue]
    }));
    setInputValue(''); 
  };

  return (
    <div className="container">
      <input 
        className="input"
        type="text" 
        value={inputValue} 
        onChange={OnChangeF} 
        placeholder="Введите текст"
      />
      <div className="button-group">
        <p>Выберите группу</p>
        <button onClick={() => Grouppp ('group1')}>Группа 1</button>
        <button onClick={() => Grouppp ('group2')}>Группа 2</button>
        <button onClick={() => Grouppp ('group3')}>Группа 3</button>
      </div>
      
      <div className="groups">
        <div className="group">
          <h2>Группа 1</h2>
          <div className="names">
            {groups.group1.map((item, index) => (
              <div className="name-card" key={index}>{item}</div>
            ))}
          </div>
        </div>

        <div className="group">
          <h2>Группа 2</h2>
          <div className="names">
            {groups.group2.map((item, index) => (
              <div className="name-card" key={index}>{item}</div>
            ))}
          </div>
        </div>

        <div className="group">
          <h2>Группа 3</h2>
          <div className="names">
            {groups.group3.map((item, index) => (
              <div className="name-card" key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
