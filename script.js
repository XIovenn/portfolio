// 监听器：等待页面完全加载再执行以下代码
document.addEventListener('DOMContentLoaded',function(){
    
    // 1. 获取所有的按钮元素
    const cards=document.querySelectorAll('.project-card');
    const modal=document.getElementById('projectModal');
    const modalTitle=document.getElementById('modalTitle');
    const modalDesc=document.getElementById('modalDesc');
    const modalTech=document.getElementById('modalTech');
    const closeBtn=document.querySelector('.close-btn');

    // 2.如果没找到元素 提前报错并退出
    if(!modal||!modalTitle||!modalDesc||!modalTech||!closeBtn){
        console.error('Modal elements not found, please check the HTML structure.');
        return;
    }

    //3.准备数据
      const projectData = {
        taskboard: {
            title: '📋 全栈任务看板 TaskBoard',
            desc: '一个真正能用的敏捷任务管理工具。支持待办、进行中、已完成三列拖拽，数据持久化存储。',
            tech: 'React + Spring Boot + MySQL + Redis + Docker'
        },
        blog: {
            title: '✍️ 个人技术博客',
            desc: '记录从零开始学习全栈开发的每一个坑和每一次顿悟。用文字巩固知识，用分享倒逼输入。',
            tech: 'Vue / React + Node.js + MongoDB'
        }
    };

    // 4.绑定每张卡片点击事件
    cards.forEach(function(card){
        card.addEventListener('click',function(){
            const projectKey=this.dataset.project;
            const data=projectData[projectKey];
            if(data){
                modalTitle.textContent=data.title;
                modalDesc.textContent=data.desc;
                modalTech.innerHTML='<strong>技术栈：</strong>'+data.tech;
                modal.style.display='flex';
            }else{
                alert('未找到该项目的数据，请检查代码。');
            }
        });
    });

    // 5.绑定关闭按钮点击事件
    closeBtn.addEventListener('click',function(){
        modal.style.display='none';
    });

    // 6.点击模态框外部区域关闭模态框
    modal.addEventListener('click',function(event){
        if(event.target===modal){
            modal.style.display='none';
        }
    });

    console.log('Modal functionality initialized successfully.');
});