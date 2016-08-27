function zqyCommCfg(cfg) {
  // 服务器地址
  if (cfg.isDev) {
    cfg.svrUrl = 'http://localhost:8810/';
  } else {
    cfg.svrUrl = 'http://120.24.209.148:8810/';
  }
  cfg.port = 8810;
};

if (typeof(module) !== 'undefined') {
  module.exports = zqyCommCfg;
}