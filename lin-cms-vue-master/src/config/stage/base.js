const baseRouter = {
  route: null,
  name: null,
  title: '基础数据',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-menu',
  filePath: 'view/base/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '品牌列表',
      type: 'view',
      name: 'brandList',
      route: '/brand/list',
      filePath: 'view/base/brand-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
    {
      title: '规格组列表',
      type: 'view',
      name: 'specsGroupList',
      route: '/specsGroup/list',
      filePath: 'view/base/specsGroup-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
    {
      title: '规格列表',
      type: 'view',
      name: 'specsList',
      route: '/specs/list',
      filePath: 'view/base/specs-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    },
    {
      title: '颜色列表',
      type: 'view',
      name: 'colorList',
      route: '/color/list',
      filePath: 'view/base/color-list.vue',
      inNav: true,
      icon: 'iconfont el-icon-goods',
    }
  ],
}

export default baseRouter
