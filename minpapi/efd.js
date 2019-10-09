const titbit = require('titbit');
const parsexml = require('xml2js').parseString;
const wxmsg = require('./weixinmsg');
const crypto = require('crypto');

var app = new titbit();

var {router} = app;

//用于验证过程，在公众号验证通过后则不会再使用。
router.get('/wx/msg', async c => {
    var token = 'msgtalk';

    var urlargs = [
        c.query.nonce,
        c.query.timestamp,
        token
    ];

    urlargs.sort();  //字典排序

    var onestr = urlargs.join(''); //拼接成字符串
    
	//生成sha1签名字符串
    var hash = crypto.createHash('sha1');
    var sign = hash.update(onestr);
		
    if (c.query.signature === sign.digest('hex')) {
        c.res.body = c.query.echostr;
    }
});


//用于验证过程，在公众号验证通过后则不会再使用。
app.router.post('/wx/msg', async c => {
    try{
        let data = await new Promise((rv,rj) =>{
            parsexml(c.body,{explicitArray:false},
                (err,result) => {
                    if (err){rj(err);}
                    else{rv(result.xml);}
                });
        });
        let retmsg = {
            touser:data.FromUserName,
            fromuser:data.ToUserName,
            msgtype:'', //在处理时动态设置类型
            msgtime: parseInt(Date.now()/1000),
            msg:''
        };
        c.res.body = wxmsg.msgDispatch(data,retmsg);  
    }catch(err){
        console.log(err);
    }
});

app.run(8001,'localhost');