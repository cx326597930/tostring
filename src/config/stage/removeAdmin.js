const removeAdminRouter = {
  route: null,
  name: null,
  title: '回收管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-delete',
  filePath: 'view/removenAdmin/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '删除的文章',
      type: 'view',
      name: 'removeAdminCreate',
      route: '/removeAdmin/removeDoc',
      filePath: 'view/removeAdmin/remove-document-list.vue',
      inNav: true,
      icon: '',
    },
    {
      title: '删除的视频',
      type: 'view',
      name: 'removeAdminCreate',
      route: '/removeAdmin/removeVideo',
      filePath: 'view/removeAdmin/remove-video-list.vue',
      inNav: true,
      icon: '',
    }
  ],
}

export default removeAdminRouter
