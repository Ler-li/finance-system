const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

// 中间件
app.use(cors()); // 跨域
app.use(express.json()); // 解析JSON

// 挂载接口
app.use('/api', routes);

// 测试接口
app.get('/', (req, res) => {
  res.send('后端服务运行成功！');
});

// 同步数据库 + 启动服务
sequelize.sync({ force: false }) // false=不删表重建
  .then(() => {
    console.log('数据库表同步成功');
    app.listen(PORT, () => {
      console.log(`服务运行在 http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log('数据库启动失败', err));