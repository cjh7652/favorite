# favorite
<h2>html 셋팅</h2>

 { <br/>
    // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and  <br/>
    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are: <br/>
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the  <br/>
    // same ids are connected. <br/>
    // Example: <br/>
    // "Print to console": { <br/>
    //    "prefix": "log", <br/>
    //    "body": [ <br/>
    //       "console.log('$1');", <br/>
    //       "$2" <br/>
    //    ], <br/>
    //    "description": "Log output to console" <br/>
    // } <br/>
    "당신이 필요했던 그것 html form" : { <br/>
    "prefix": "!!" , <br/>
    "body": [ <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    /* meta */ <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    /* link + script */ <br/>
    // 폰트어썸 <br/>
    "", <br/>
    // 구글폰트 아이콘 <br/>
    "", <br/>
    // CSS 리셋 <br/>
    "", <br/>
    // 제이쿼리 3.7 CDN <br/>
    "", <br/>
    // 로컬 CSS <br/>
    "" , <br/>
    // 로컬 js <br/>
    "", <br/>
    // +@ 당신의 작업대 <br/>
    "", <br/>
    "", <br/>
    "", <br/>
    "", //공백을 위한 공간입니다. <br/>
    "", <br/>
    "", <br/>
    "" <br/>
     ], <br/>
     "description": "Seong-ho/Kim-Sub html" <br/>    
     } <br/>
  } <br/>
 <br/>
 <h2> 사용법 </h2>
  비주얼 스튜디오코드 설정-사용자코드설정-html.json에 붙여 넣기<br/>
  index.html - !! + enter

 <br/>
 <br/>
 <h2>visual studio Custom</h2>
<h3>사용법- 설정-설정-설정json열기</h3>
<pre>
 // settings.json
    // 김섭 님 께서 작성하였습니다.
    // 베이스 테마는 [ Visual Assist Dark Theme ] 입니다.
    // 노동에 대한 수고로움은 https://github.com/Kim-Sub 으로 도네이트 해주시면 됩니다.
    // 그럼 즐거운 코딩되시길.. ♥


    /* 인터페이스(UIUX) 컬러 커스텀 */
    "workbench.colorCustomizations": {
        // 포커스 중인 행 영역
        "editor.lineHighlightBackground": "#ffdcdc" ,
        // 포커스 중인 들여쓰기 가이드
        "editorIndentGuide.activeBackground": "#ff5c5cf5" ,
        // 일치하는 브라켓 컬러
        "editorBracketMatch.border": "#ff5c5cf5" ,
        // 일치하는 브라켓 배경색
        "editorBracketMatch.background": "#00000000" ,
        // 커서(타이핑) 컬러
        "editorCursor.foreground": "#000000" ,

    },

    /* 에디터 텍스트 컬러 커스텀 */
    "editor.tokenColorCustomizations": {
        /* 주석 컬러   기본값 : #57A64A */
        "comments": "#57A64A" ,
    
        "textMateRules": [
            // 항목 추가 방법
            // [ crlt + shift + p ] - [ 개발자: 편집기 토큰 및 범위 검사 ] - [ 원하는 요소 클릭 ] 하여 나오는 textmate scopes 첫 줄을 scope 속성값으로 작성

//  CSS , SCSS 영역
            // ID 
            {"scope": "entity.other.attribute-name.id.css", "settings": {"foreground": "#6d1521fb", "fontStyle": "bold"}} ,
            // class
            {"scope": "entity.other.attribute-name.class.css", "settings": {"foreground": "#e9596dfb", "fontStyle": "bold"}} ,
            // div, ul, li, span 등 선택자 요소들
            {"scope": "entity.name.tag.css", "settings": {"foreground": "#ff22f4fb"}} ,

            // 속성 프로퍼티        기본값 : #92CAF4
            {"scope": "support.type.property-name.css", "settings": {"foreground": "#1169b6f6"}} ,
            // 문자 속성(값)          기본값 : #C8C8C8
            {"scope": "support.constant.property-value.css", "settings": {"foreground": "#9225cd"}} ,
            // 수치 속성(값)          기본값 : #B5CEA8
            {"scope": "constant.numeric.css", "settings": {"foreground": "#9225cd"}} ,
         

//  HTML 영역
            // 선택자
            {"scope": "entity.name.tag.html", "settings": {"foreground": "#830213fb", "fontStyle": ""}} ,
            // 선택자
            {"scope": "", "settings": {"foreground": "#000000fb", "fontStyle": ""}} ,



        ]
    },


}
</pre>
