function xwfCommCfg(cfg) {
  // 端口
  cfg.port = 9001;
  // 数据库类型
  cfg.dbtype = 'postsql';
  // 数据库名称
  cfg.dbname ='jiaodb';

  // 服务器地址
  if (cfg.isDev) {
    cfg.svrUrl = 'http://localhost:'+ cfg.port + '/';
  } else {
    cfg.svrUrl = 'http://123.207.121.16:'+ cfg.port + '/';
  }


  

  // 小区对应学校的数据
  // var svData = require('./xwf-sv-cfg.js');
  // svData(cfg);
  // console.log("cfg.sv.lenght = " + cfg.svData.lenght);
}

if (typeof(module) !== 'undefined') {
  module.exports = xwfCommCfg;
}
