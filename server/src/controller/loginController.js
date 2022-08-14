exports.githubOAuth = (req, res) => {
  const url = 'https://github.com/login/oauth/authorize?';
  const config = {
    client_id: '6b1c53b6587cd1887dbd',
    scope: 'user',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${url}?${params}`;
  res.redirect(finalUrl);
};
