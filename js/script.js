let showTab = function(){
    let tabTitle = document.querySelectorAll('.tabs-title')
    let tabContent  = document.querySelectorAll('.tabs-content > li');

    for (let item of tabTitle){
        item.addEventListener('click', function(){
            let currentTab = item
            let tabId = currentTab.getAttribute('data-tab')
            let currentText = document.querySelector(tabId)

            if(!currentTab.classList.contains('active')){
                for(let item of tabTitle){
                    item.classList.remove('active')
                }
                currentTab.classList.add('active')
    
                for(let item of tabContent){
                    item.classList.remove('active')
                }
                currentText.classList.add('active')
            }

            
        })
        
    }
}
showTab()
    