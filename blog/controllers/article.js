/**
├── controllers
    └── article.js
*/
const ArticleModel = require('../modules/article')

const read = require('../lib/readability');
const fs = require('fs');

class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.title // 文章标题
            && req.author // 文章作者
            && req.content // 文章内容
            && req.category // 文章分类
        ) {
            try {
                // 创建文章模型
                const ret = await ArticleModel.createArticle(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await ArticleModel.getArticleDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建文章成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建文章失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }

    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getArticleDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '文章ID必须传'
            }
        }
    }

    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async info(ctx) {
 
        try {
            // 查询文章详情模型
            const url = 'https://new.qq.com/omn/20181122/20181122A0AJA6.html';
            ctx.body = {
                data: {}
            }
            let data = await callApi(url,ctx);
            console.log(data);

            ctx.response.status = 200;
            ctx.body.code = 200;
            ctx.body.msg = '查询成功';

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败'
            }
        }
      
    }
}

async function callApi(url, ctx){

    return new Promise((resolve, reject) => read(url, (err, article, meta) => {
        ctx.body.data.title = article.title;
        // ctx.body.data.content = article.content;
        console.log(meta);
        console.log(article)
        resolve(article);
    }));


}

module.exports = articleController