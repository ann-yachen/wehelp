/* 切換內容 (content) */
function showContent(id){
    let showContent=document.querySelector("#"+id); // 利用id將要顯示的內容標籤選出
    let content=document.querySelectorAll(".content"); // 利用class將所有內容標籤都選出
     // 將所有的內容class都改為未顯示
    for(let i=0; i<content.length; i++){
        content[i].className="content";
    }
    // 將要顯示的內容class改為顯示
    showContent.className="content showed-content"; 
}
/* 選單動畫 (nav->item) */
let overItem=function(element){
    element.style.color="#ff4500";
    // 滑鼠移入時前面增加底線
    element.textContent="_"+element.getAttribute("data-text");
};
let outItem=function(element){
    element.style.color="#000000";
    element.textContent=element.getAttribute("data-text");
};