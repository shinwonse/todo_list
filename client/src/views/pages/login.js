import LoginStyle from 'styles/login.module.css';
import { push } from '../../lib/router';

const Login = `
  <div id='login' class=${LoginStyle.wrapper}>
    <button id='login-btn' class=${LoginStyle.button}>
      Login with Github
    </button>
  </div>
`;

// const Login = `
//   <div id='login' class=${LoginStyle.wrapper}>
//     <h1 class=${LoginStyle.title}>LOGIN</h1>
//     <form class=${LoginStyle.form}>
//       <div class=${LoginStyle.inputBox}>
//         <label class=${LoginStyle.label}>ID</label>
//         <input class=${LoginStyle.input} type='text'/>
//       </div>
//       <div class=${LoginStyle.inputBox}>
//         <label class=${LoginStyle.label}>PW</label>
//         <input class=${LoginStyle.input} type='text'/>
//       </div>
//       <button onclick="" id='login-btn' class=${LoginStyle.button}>
//         Login with Github
//       </button>
//     </form>
//   </div>
// `;

// const addLoginBtn = (e) => {
//   e.preventDefault();
//   const pushMain = () => {
//     push('/');
//   };
//   const loginBtn = document.getElementById('login-btn');
//   console.log(loginBtn);
//   loginBtn.addEventListener('click', pushMain);
// };
// observer.observe(document.body, { childList: true });

export default Login;
