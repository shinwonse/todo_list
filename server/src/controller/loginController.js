exports.githubOAuth = (req, res) => {
  const url = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: '1c2eee82961aa381217b',
    scope: 'user',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${url}?${params}`;
  // res.send(finalUrl);
  res.redirect(finalUrl);
};
