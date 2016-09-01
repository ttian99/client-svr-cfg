function zqyCommCfg(cfg) {
  // 端口
  cfg.port = 9002;
  // 数据库类型
  cfg.dbtype = 'mongo';
  // 数据库名称
  cfg.dbname ='jiao';
  // 服务器地址
  if (cfg.isDev) {
    cfg.svrUrl = 'http://localhost:' + cfg.port + '/';
  } else {
    cfg.svrUrl = 'http://120.24.209.148:' + cfg.port + '/';
  }

};

if (typeof(module) !== 'undefined') {
  module.exports = zqyCommCfg;
}