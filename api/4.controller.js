// 引入mysql模版
const mysql = require('mysql')
// 创建联接
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mysql_001'   
})
// 根据业务处理模块
module.exports = {
    // 页面服务器请求
    tesApi:(req,res)=>{
        res.send('请求成功!')
    },
    // 获取所有英雄列表
    getAllhero:(req,res)=>{
        const sql = 'select * from heros'
        conn.query(sql,(err,result)=>{
            // 如果读取失败,则返回一个失败的结果
            if(err) return res.send({status:500,msg:err.message,data:null})
            // 如果读取成功的话则返回一个成功的结果
            res.send({status:200,msg:'ok',data:result})
        })
    },
    // 插入新的英雄数据
    addhero:(req,res)=>{
        const hero = req.body
        // 得到当前的时间对象
        const dt = new Date()
        // 年
        const y = dt.getFullYear()
        // 月
        const m = (dt.getMonth()+1).toString().padStart(2,'0')
        // 日
        const d = dt.getDate().toString().padStart(2,'0')
    
        // 时
        const hh = dt .getHours().toString().padStart(2,'0')
        // 分
        const mm = dt.getMinutes().toString().padStart(2,'0')
        // 秒
        const ss = dt.getSeconds().toString().padStart(2,'0')
    
        hero.ctime = y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss
        const sql = 'insert into heros set ?'
        conn.query(sql,hero,(err,result)=>{
            // 如果添加失败的话就返回一个失败的结果
            if(err) return res.send({status:500,msg:err.message,data:null})
            // 如果添加成功的话就返回一个成功的结果
            res.send({status:200,msg:'ojbk',data:result})
        })
    },
    // 根据Id获取英雄信息
    gethero:(req, res)=>{
        const id = req.params.id 
        const sql = 'select * from heros where id=?'
        conn.query(sql,id,(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'ojbk',data:result})
        })
    },
    // 根据Id更新英雄数据
    updAtehero:(req,res)=>{
        // 获取ID
        const id = req.params.id
        // 获取更新的数据
        const newInfo = req.body
        const sql = 'update heros set ? where id = ?'
        conn.query(sql,[newInfo,id],(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'ojbk',data:result})
        })
    },
    // 根据Id软删除英雄数据
    deletehero:(req,res)=>{
        // 获取id
        const id = req.params.id
        const sql = 'update heros set isdel = 1 where id = ?'
        conn.query(sql,id,(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'ojbk',data:result})
        })
    }


}