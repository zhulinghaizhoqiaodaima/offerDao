export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/questionBank/index',
    'pages/study/index',
    'pages/exam/index',
    'pages/center/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'offer·道',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#87959C",
    "selectedColor": "#00ADFF",
    "backgroundColor": "#FFFFFF",
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: "static/images/tabbar/home-off.png",
        selectedIconPath: "static/images/tabbar/home-on.png",
      },
      {
        pagePath: 'pages/questionBank/index',
        text: '题库',
        iconPath: "static/images/tabbar/questionBank-off.png",
        selectedIconPath: "static/images/tabbar/questionBank-on.png",
      },
      {
        pagePath: 'pages/study/index',
        text: '学习',
        iconPath: "static/images/tabbar/study-off.png",
        selectedIconPath: "static/images/tabbar/study-on.png",
      },
      {
        pagePath: 'pages/exam/index',
        text: '考试',
        iconPath: "static/images/tabbar/pencil-off.png",
        selectedIconPath: "static/images/tabbar/pencil-on.png",
      },
      {
        pagePath: 'pages/center/index',
        text: '我的',
        iconPath: "static/images/tabbar/cneter-off.png",
        selectedIconPath: "static/images/tabbar/cneter-on.png",
      }
    ],
  },
})
