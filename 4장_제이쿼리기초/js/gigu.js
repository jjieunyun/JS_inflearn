$(document).ready(function(){
    //지구이미지 웹요소(노드)를 찾아서 저장
    let $gigu = $("#gigu");
    //버튼에 이벤트를 등록(3초만에 left값을 480px만큼 이동)
    //마치 움직이는 애니메이션 형태가 된다.
    $("#btnStart").click(function(){
        $gigu.animate({
            left : "480px"
        }, 3000)
    })
});