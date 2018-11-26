export default {

  firstMsg: {
    msg: [
      '', // 第一个元素用不到，是从第二个元素开始取值的
      { "imgurl": "", "text": "你好，朋友" },
    ],
    key1: {
      send: '你好',
      msg: [
        { "imgurl": "", "text": "你想知道点什么？" },
      ],
      questionList: []
    },
    key2: {
      send: '为什么不能输入文字？',
      msg: [
        { "imgurl": "", "text": "这个嘛，因为比较简单" },
        { "imgurl": "", "text": "再说这个网站只是为了模仿聊天，我觉得这种交互方式更自然，能更好的指引着你去了解我，比较有趣，这就足够了。" },
      ],
      questionList: []
    }
  },

  "interest": {
    "send": "你平时都喜欢干什么呢？",
    "msg": [
      { "imgurl": "", "text": "我的爱好很广泛，对很多事物都感兴趣" },
      { "imgurl": "", "text": "喜欢思考，探索未知" },
    ],
    "questionList": [
      { "key": "key1", "value": "......" },
    ],
    "key1": {
      "send": "......",
      "msg": [
        { "imgurl": "", "text": "嘿嘿" },
        { "imgurl": "", "text": "因为现阶段我在自学前端，所以平常干的最多的一件事就是坐在电脑面前学习" },
        { "imgurl": "", "text": "或者是写代码" },
      ],
      "questionList": [
        {key: 'key1', value: '前端？'},
        {key: 'key2', value: '哇，自学啊，你是怎么学习的啊？'},
      ],
      key1: {
        send: '前端？',
        msg: [
          { imgurl: '', text: '对啊'},
          { imgurl: '', text: '就是编写网页代码的，写网页程序的'},
        ],
        questionList: [
          {key: 'key1', value: '网页也需要程序？'},
          {key: 'key2', value: '写代码？那就是程序员了'},
        ],
        key1: {
          send: '网页也需要程序？',
          msg: [
            { imgurl: '', text: '对啊，随着浏览器的不断强大，网页的功能也越来越丰富'},
            { imgurl: '', text: '现在一个网页的功能和性能足以媲美电脑或者手机上的本地应用了，现在开发一个网页就像开发一个应用程序一样'},
          ],
          questionList: [
            {key: 'key1', value: '好吧'},
          ],
          key1: {
            send: '好吧',
            msg: [],
            questionList: []
          }
        },
        key2: {
          send: '写代码？那就是程序员了',
          msg: [
            { imgurl: '', text: '是的'},
          ],
          questionList: [
            {key: 'key1', value: '不错啊，加油啊，兄弟！'},
          ],
          key1: {
            send: '不错啊，加油啊，兄弟！',
            msg: [{imgurl: '', text: '嘿嘿，谢谢~'}],
            questionList: []
          }
        },
      },

      key2: {
        send: '哇，自学啊，你是怎么学习的啊？',
        msg: [
          { imgurl: '', text: '在网上搜索的教程，幸好做开发的人都喜欢分享知识，所以可以搜到好多相关的东西'},
          { imgurl: '', text: '一开始我对微信小程序很感兴趣，在掌握了html,css,javascript的基本知识之后，在慕课网上买了关于小程序的课程，老师讲的很好，通俗易懂，于是我就慢慢的入门了，到现在都已经快一年了。现在想想过程真的是很艰苦啊'},
        ],
        questionList: [
          {key: 'key1', value: '是啊，学习是件很辛苦的事'},
          {key: 'key2', value: '你还没找到工作吗？'},
        ],
        key1: {
          send: '是啊，学习是件很辛苦的事',
          msg: [{imgurl: '', text: '嗯嗯'}],
          questionList: []
        },
        key2: {
          send: '还没找到工作吗？',
          msg: [
            {imgurl: '', text: '是啊，现在正在找工作中'},
            {imgurl: '', text: '不过，因为是高中毕业的原因，工作不是很好的找'},
          ],
          questionList: [
            {key: 'key1', value: '要不要来我们这试试，我们不看学历只看能力！'},
            {key: 'key2', value: '高中毕业啊！本来想让你来我公司试试呢，还是算了吧'},
            {key: 'key3', value: '兄弟，加油！'},
          ],
          key1: {
            send: '要不要来我们这试试，我们不看学历只看能力！',
            msg: [{imgurl: '', text: '当然要啦，这是我的微信：zhangzhonghepiano，欢迎联系我~'}],
            questionList: []
          },
          key2: {
            send: '高中毕业啊！本来想让你来我公司试试呢，还是算了吧',
            msg: [{imgurl: '', text: '......'}],
            questionList: []
          },
          key3: {
            send: '兄弟，加油！',
            msg: [{imgurl: '', text: '嗯！好的......'}],
            questionList: []
          },
        }
      }
    },
  },

  book: {
    send: '中合最近在看什么书呢？',
    msg: [
      {imgurl: '', text: '技术方面的书'},
      {imgurl: '', text: '像《JavaScript高级程序设计》、《css揭秘》之类的书'},
    ],
    questionList: [
      {key: 'key1', value: '这么用功'},
      {key: 'key2', value: '不知道是什么'},
      {key: 'key3', value: '......'},
      {key: 'key4', value: '我也在学前端，推荐几本书吧'},
    ],
    key1: {
      send: '这么用功',
      msg: [
        {imgurl: '', text: '是的'},
        {imgurl: '', text: '为了学习编程，像这类基础的书籍是必须看的，最好的重复的看，经常的看，慢慢消化里面的知识点'},
      ],
      questionList: [{key: 'key1', value: '加油，我看好你'}],
      key1: {
        send: '加油，我看好你',
        msg: [{imgurl: '', text: '嘿嘿'}],
        questionList: []
      }
    },
    key2: {
      send: '不知道是什么',
      msg: [
        {imgurl: '', text: '......'},
      ],
      questionList: [],
    },
    key3: {
      send: '......',
      msg: [],
      questionList: [],
    },
    key4: {
      send: '我也在学前端，推荐几本书吧',
      msg: [
        {imgurl: '', text: '是吗，这么巧'},
        {imgurl: '', text: '我现在看的书还不是很多'},
        {imgurl: '', text: '像刚才说的两本之外，还有《JavaScript语言精粹》、《高性能JavaScript》、阮一峰的《ES6标准入门》都很不错'},
        {imgurl: '', text: '因为我读的书也不多，暂时推荐这么多吧'},
      ],
      questionList: [],
    },
  },
  
  works: {
    send: '听说你在学前端，有什么作品没有？',
    msg: [
      {imgurl: '', text: '当然，大大小小的有很多，比较满意的有这些'},
      {imgurl: 'http://www.mu-zi.xyz/static/img/music.png', text: "基于vue开发的<a target='_blank' href='http://www.mu-zi.xyz/music/'>音乐播放器</a>"},
      {imgurl: 'http://www.mu-zi.xyz/static/img/weChat.jpg', text: '可以听音乐和查阅书籍的微信小程序'},
      {imgurl: '', text: '还有这个页面，也是基于vue开发的'},
    ],
    questionList: [],
  },

  movie: {
    send: '中合喜欢看什么电影呢？',
    msg: [
      {imgurl: '', text: '喜欢看文艺片和科幻片'},
    ],
    questionList: [
      {key: 'key1', value: '我也喜欢看科幻电影呢'},
      {key: 'key2', value: '文艺片？'},
    ],
    key1: {
      send: '我也喜欢看科幻电影呢',
      msg: [
        {imgurl: '', text: '是吧'},
        {imgurl: '', text: '我相信很多人都喜欢看，因为超酷的特效，还有天马行空的想象，很有趣'},
        {imgurl: '', text: '不过好的科幻片也是可遇不可求的'},
      ],
      questionList: [
        {key: 'key1', value: '能推荐几部吗？'},
        {key: 'key2', value: '感觉都差不多，都是为了娱乐'},
      ],
      key1: {
        send: '能推荐几部吗？',
        msg: [
          {imgurl: '', text: '当然可以'},
          {imgurl: '', text: "我搜索了一下，<a target='_blank' href='https://www.zhihu.com/question/28237252'>这里</a>还有<a target='_blank' href='https://movie.douban.com/typerank?type_name=%E7%A7%91%E5%B9%BB&type=17&interval_id=100:90&action='>这里</a>，推荐的还不错，如果有时间可以都看一下"},
        ],
        questionList: []
      },
      key2: {
        send: '感觉都差不多，都是为了娱乐',
        msg: [
          {imgurl: '', text: '好吧'},
        ],
        questionList: []
      },
    },

    key2: {
      send: '文艺片？',
      msg: [
        {imgurl: '', text: '我认为的文艺片应该是一些情感比较丰富，内容比较写实，故事结构合理，真实，细细品味，能够挖掘出大量信息的电影。这类电影就像一本优秀的书籍一样，可以收获很多在现实生活中感受不到的情感和经验。'},
      ],
      questionList: [
        {key: 'key1', value: '电影而已，搞得这么复杂吗'},
        {key: 'key2', value: '那推荐几部看看'},
        {key: 'key3', value: '你最喜欢哪一部呢？'},
        {key: 'key4', value: '......'},
      ],
      key1: {
        send: '电影而已，搞得这么复杂吗',
        msg: [
          {imgurl: '', text: '不要忘了'},
          {imgurl: '', text: '电影也是艺术！'},
        ],
        questionList: [
          {key: 'key1', value: '好像是这么回事'},
          {key: 'key2', value: '......'},
        ],
        key1: {
          send: '好像是这么回事',
          msg: [
            {imgurl: '', text: '所以，去电影院的时候要多支持一下文艺片哦~'},
          ],
          questionList: [
            {key: 'key1', value: '好的'},
            {key: 'key2', value: '......'},
          ],
          key1: {
            send: '好的',
            msg: [
              {imgurl: '', text: '嘿嘿'},
            ],
            questionList: [],
          },
          key2: {
            send: '......',
            msg: [
              {imgurl: '', text: '......'},
            ],
            questionList: [],
          }
        }
      },
      key2: {
        send: '那推荐几部看看',
        msg: [
          {imgurl: '', text: '《大河恋》、《海上钢琴师》、《一一》、《肖申克的救赎》、《活着》、《霸王别姬》、《过年》、《美丽世界》、《追梦赤子心》等等吧...'},
          {imgurl: '', text: "也可以看<a target='_blank' href='https://movie.douban.com/tag/%E6%96%87%E8%89%BA%E7%89%87'>这里</a>推荐的电影，都不错"},
        ],
        questionList: [],
      },
      key3: {
        send: '你最喜欢哪一部呢？',
        msg: [
          {imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543039443824&di=4c916d20679e40393801d5ce3cebf9a5&imgtype=0&src=http%3A%2F%2Fimg22.mtime.cn%2Fup%2F2010%2F04%2F16%2F132709.26680157_500.jpg', text: '《大河恋》'},
          {imgurl: '', text: "这部电影无论是音乐，画面，演员，和故事情节，对我来说都是最好的。"},
          {imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1543029613&di=2594c458a1ef9f25809b2024970181d9&src=http://image14.m1905.cn/uploadfile/2012/0831/20120831015948580.jpg', text: ""},
          {imgurl: '', text: "真的是，看完一部电影就像是过完了一生一样，这种感觉只有电影能给。"},
        ],
        questionList: [
          {key: 'key1', value: '这部电影我看过，还不错'},
          {key: 'key2', value: '这部电影我看过，没什么意思'},
          {key: 'key3', value: '听起来不错'},
        ],
        key1: {
          send: '这部电影我看过，还不错',
          msg: [{imgurl: '', text: '是吧'}],
          questionList: [],
        },
        key2: {
          send: '这部电影我看过，没什么意思',
          msg: [{imgurl: '', text: '......'}],
          questionList: [],
        },
        key3: {
          send: '听起来不错',
          msg: [{imgurl: '', text: '嗯嗯，推荐你去看看'}],
          questionList: [
            {key: 'key1', value: '好的'},
            {key: 'key2', value: '去哪里看呢？'},
          ],
          key1: {
            send: '好的',
            msg: [],
            questionList: [],
          },
          key2: {
            send: '去哪里看呢？',
            msg: [{imgurl: '', text: "<a target='_blank' href='https://www.bilibili.com/bangumi/play/ss11132'>点击这里</a>，去B站看，不需要VIP哦~"}],
            questionList: [],
          }
        },
      },
      key4: {
        send: '......',
        msg: [],
        questionList: [],
      },
    }
  },

  music: {
    send: '你喜欢听什么歌呢？',
    msg: [
      {imgurl: '', text: '之前喜欢听摇滚和民谣，还比较喜欢听古典音乐，纯音乐那种'},
      {imgurl: '', text: '现在因为把所有的经历都放在学习上了，已经好久没认真听过一首歌了...'},
    ],
    questionList:[],
  },

  work: {
    send: '你现在在做什么工作呢？',
    msg: [
      {imgurl: '', text: '这个嘛...'},
      {imgurl: '', text: '我正在找工作...'},
    ],
    questionList: [
      {key: 'key1', value: '我们正在招前端开发，看你骨骼精奇，要不要来试一下'},
      {key: 'key2', value: '......'},
    ],
    key1: {
      send: '我们正在招前端开发，看你骨骼精奇，要不要来试一下',
      msg: [
        {imgurl: '', text: '当然可以'},
        {imgurl: '', text: '这是我的微信：zhangzhonghepiano'},
        {imgurl: '', text: '和电话：17796606058'},
        {imgurl: '', text: '欢迎联系我~'},
      ],
      questionList: [],
    },
    key2: {
      send: '......',
      msg: [],
      questionList: [],
    }
  },

  dream: {
    send: '你的梦想是什么？',
    msg: [{imgurl: '', text: '现在我的梦想就是成为前端界的大牛！'}],
    questionList: [
      {key: 'key1', value: '这好像有点困难'},
      {key: 'key2', value: '有志气，加油'},
      {key: 'key3', value: '放弃吧，你一个高中毕业的，凭什么'},
    ],
    key1: {
      send: '这好像有点困难',
      msg: [{imgurl: '', text: '确实很困难，需要点时间'}],
      questionList: [],
    },
    key2: {
      send: '有志气，加油',
      msg: [{imgurl: '', text: '嘿嘿'}],
      questionList: [],
    },
    key3: {
      send: '放弃吧，你一个高中毕业的，凭什么',
      msg: [{imgurl: '', text: '你说的都是对的，我竟无以反驳...'}],
      questionList: [],
    },
  },

  family: {
    send: '你结婚了吗？',
    msg: [{imgurl: '', text: '我已经结婚了，有一个非常可爱的女儿~'}],
    questionList: [],
  },

  contact: {
    send: '怎么联系你呢',
    msg: [
      {imgurl: '', text: '你可以在这个页面的右端向左滑动，可以显示我的联系方式'},
      {imgurl: '', text: '也可以添加我的微信：zhangzhonghepiano'},
    ],
    questionList: [],
  },

  "about": {
    "send": "这个网站的创意真好！",
    "msg": [
      { "imgurl": "", "text": "嘿嘿，确实，不过这不是我的创意，我是借鉴她人的，我也觉得很有意思，就把我自己的网站也设计成聊天的形式了" },
      { "imgurl": "", "text": "你可以去<a target='_blank' href='http://zhangwenli.com/'>这里</a>观看原作者羡辙的个人网站" },
      { "imgurl": "", "text": "另外需要说明的是，我这个网站的代码全部是我自己原创的~" },
    ],
    "questionList": [],
  }
}