module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'JavaScript', link: '/pages/88721431i3hkj3h12h312/'}, 
        // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
      ]}
    ]
  }, 
  {
    text: '页面',
    link: '/ui/',
    items: [
      {text: 'HTML', link: '/pages/8309a5b876fc95e3/'},
      {text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
