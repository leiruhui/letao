// 这是定义路由模块,专门负责创建路由对象,并挂载路由规则
const express = require('express')
// 利用express.Router()创建路由对象
const router = express.Router()
// 导入业务模块
const ctrl = require('./4.controller.js')

router.get('/',ctrl.tesApi)

    // 对外暴露getAllhero接口
    router.get('/getallhero',ctrl.getAllhero)
// 对外暴露addhero接口
router.post('/addhero',ctrl.addhero)
    // 暴露gethero/:id在外面
    router.get('/gethero/:id',ctrl.gethero)
    // 更具ID更新英雄数据暴露updatehero
    router.post('/updatehero/:id',ctrl.updAtehero)
    // 根据ID进行软删除暴露deletehero
    router.get('/deletehero/:id',ctrl.deletehero)

// 最后把路由对象导出
module.exports = router

