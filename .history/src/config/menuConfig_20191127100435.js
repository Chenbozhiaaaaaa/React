const menuList =[
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:"UI",
        key:"/admin/ui",
        children:[
            {
                title:"按钮",
                key:'/admin/ui/buttons',
            },
            {
                title:'弹框',
                key:'/admin/ui/modals'
            },
            {
                title:'Loading',
                key:'/admin/ui/loadings'
            },
            {
                title:'通知提醒',
                key:'/admin/ui/notification'
            },
            {
                title:'全局Message',
                key:'/admin/ui/messsages'
            }
        ]
    },
    {
        title:'表单',
        key:'/admin/form',
        children:[
            {
                title:'登录',
                key:'/admin/form/login'
            },
            {
                title:'注册',
                key:'/admin/form/reg'  
            }
        ]
    },
    {
        title:'车辆地图',
        key:'/admin/bikeMap'
    },
    {
        title:'图标',
        key:'/admin/charts',
        children:[
            {
                title:"柱状图",
                key:'/admin/charts/bar',
            },
            {
                title:'饼图',
                key:'/admin/charts/pie'
            },
            {
                title:'折线图',
                key:'/admin/charts/loading'
            }
        ]
    },
]

export default menuList;