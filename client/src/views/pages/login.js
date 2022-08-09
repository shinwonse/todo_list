import LoginStyle from 'styles/login.module.css';

const Login = `
  <div class=${LoginStyle.wrapper}>
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
    </form>
  </div>
`;

export default Login;
