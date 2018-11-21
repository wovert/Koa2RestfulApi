/**
├── modules
    └── article.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('../schema/article');
// 自动创建表
Article.sync({force: false});

const read = require('../lib/readability');


class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data) {
        return await Article.create({
            title: data.title, // 文章标题
            author: data.author, // 文章作者
            content: data.content, // 文章内容
            category: data.category, // 文章分类
        })
    }

    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id) {
        return await Article.findOne({
            where: {
                id,
            },
        })
    }

    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getReadApi(fileUrl) {
        let result = await read(fileUrl, function(err, article, meta) {
            var dom = article.document;
            //var html = '<html><head><meta charset="utf-8"><title>'+dom.title+'</title></head><body><h1>'+article.title+'</h1>'+article.content+'</body></html>';
            
            console.log(dom.title);

            return {
                title: dom.title
            }
        });
        
        console.log('result:', result);

        return result;
    }    
}

module.exports = ArticleModel