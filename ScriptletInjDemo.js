
        // 获取所有的 div 元素
        const divs = document.getElementsByTagName('div');

        // 检查是否有至少7个 div 元素
        if (divs.length >= 7) {
            // 选择第7个 div （注意索引是从0开始的）
            const seventhDiv = divs[6];
            
            // 获取第七个 div 的父节点
            const parentElement = seventhDiv.parentNode;
            
            // 从 DOM 中删除第七个 div
            parentElement.removeChild(seventhDiv);
        } else {
            console.log("There are not enough div elements to remove the seventh one.");
        }
