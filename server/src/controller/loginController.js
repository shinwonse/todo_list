const { User } = require('../models/user');
const axios = require('axios').default;
require('dotenv').config();

exports.githubLoginPage = (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: process.env.GH_ID,
    scope: 'user',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  res.redirect(finalUrl);
};

exports.githubLoginWithServer = async (req, res) => {
  const { code } = req.query;
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const body = {
    client_id: process.env.GH_ID,
    client_secret: process.env.GH_SECRET,
    code,
  };
  try {
    const { data: requestToken } = await axios.post(baseUrl, body, {
      headers: { Accept: 'application/json' },
    });
    const { access_token } = requestToken;

    const apiUrl = 'https://api.github.com';
    const { data: userdata } = await axios.get(`${apiUrl}/user`, {
      headers: { Authorization: `token ${access_token}` },
    });

    const { data: emailDataArr } = await axios.get(`${apiUrl}/user/emails`, {
      headers: { Authorization: `token ${access_token}` },
    });

    const { email } = emailDataArr.find(
      (emailObj) => emailObj.primary === true && emailObj.verified === true
    );

    const { login: nickname } = userdata;

    // 이메일과 일치하는 유저를 DB 찾음
    // 이메일과 일치하는 유저가 존재하지 않을 경우 회원가입을 시킴

    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = await User.create({
        email,
        nickname,
      });
    }
    return res.status(201).redirect('http://localhost:8080');
  } catch (err) {
    console.error(err);
    return res.redirect(
      500,
      '/?loginError=서버 에러로 인해 로그인에 실패하였습니다. 잠시 후에 다시 시도해 주세요'
    );
  }
};
