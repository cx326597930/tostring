const goodsRouter = {
  route: null,
  name: null,
  title: '商品管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-goods',
  filePath: 'view/goods/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加商品',
      type: 'view',
      name: 'GoodsCreate',
      route: '/goods/add',
      filePath: 'view/goods/goods-create.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
    {
      title: '商品列表',
      type: 'view',
      name: 'GoodsCreate',
      route: '/goods/list',
      filePath: 'view/goods/goods-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
  ],
}

export default goodsRouter
