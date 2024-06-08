import React, { useState } from 'react';
import './Login.css';  // Make sure Login.css is in the same directory as Login.js

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 처리 (예: API 호출)
    console.log('이메일:', email);
    console.log('비밀번호:', password);
  };

  const handleSignUp = () => {
    // 회원가입 로직 처리 (예: 회원가입 페이지로 이동)
    console.log('회원가입 버튼 클릭됨');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            />
          </div>
          <button type="submit">로그인</button>
        </form>
        <button type="button" className="signup-button" onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
