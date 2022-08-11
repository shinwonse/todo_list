import LoginStyle from 'styles/login.module.css';
import { push } from '../../lib/router';

const Login = `
  <div id='login' class=${LoginStyle.wrapper}>
    <h1 class=${LoginStyle.title}>LOGIN</h1>
    <form class=${LoginStyle.form}>
      <div class=${LoginStyle.inputBox}>
        <label class=${LoginStyle.label}>ID</label>
        <input class=${LoginStyle.input} type='text'/>
      </div>
      <div class=${LoginStyle.inputBox}>
        <label class=${LoginStyle.label}>PW</label>
        <input class=${LoginStyle.input} type='text'/>
      </div>
      <button id='login-btn' class=${LoginStyle.button}>
        로그인
      </button>
    </form>
  </div>
`;

// const addLoginBtn = () => {
//   const pushMain = () => {
//     push('/');
//   };
//   const loginBtn = document.getElementById('login-btn');
//   loginBtn.addEventListener('click', pushMain);
// };
// observer.observe(document.body, { childList: true });

export default Login;
