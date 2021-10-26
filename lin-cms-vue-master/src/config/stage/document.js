const documentRouter = {
  route: null,
  name: null,
  title: '文章管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-reading',
  filePath: 'view/document/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '文章分类',
      type: 'view',
      name: 'documentCreate',
      route: '/document/documentType',
      filePath: 'view/document/document-type-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
    {
      title: '文章列表',
      type: 'view',
      name: 'documentCreate',
      route: '/document/list',
      filePath: 'view/document/document-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
  ],
}

export default documentRouter
