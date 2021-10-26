const videoRouter = {
  route: null,
  name: null,
  title: '视频管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-video-camera',
  filePath: 'view/video/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '视频分类',
      type: 'view',
      name: 'videoCreate',
      route: '/video/video-type',
      filePath: 'view/video/video-type.vue',
      inNav: true,
      icon: '',
    },
    {
      title: '视频列表',
      type: 'view',
      name: 'videoCreate',
      route: '/video/video-list',
      filePath: 'view/video/video-list.vue',
      inNav: true,
      icon: '',
    },
  ],
}

export default videoRouter
