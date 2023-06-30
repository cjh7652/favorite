    // settings.json
    // 김섭 님 께서 작성하였습니다.
    // 베이스 테마는 [ Visual Assist Dark Theme ] 입니다.
    // 노동에 대한 수고로움은 https://github.com/Kim-Sub 으로 도네이트 해주시면 됩니다.
    // 그럼 즐거운 코딩되시길.. ♥


    /* 인터페이스(UIUX) 컬러 커스텀 */
    "workbench.colorCustomizations": {
        // 포커스 중인 행 영역
        "editor.lineHighlightBackground": "#000" ,
        // 포커스 중인 들여쓰기 가이드
        "editorIndentGuide.activeBackground": "#fff" ,
        // 일치하는 브라켓 컬러
        "editorBracketMatch.border": "#fff" ,
        // 일치하는 브라켓 배경색
        "editorBracketMatch.background": "#fff" ,
        // 커서(타이핑) 컬러
        "editorCursor.foreground": "#ff0000" ,
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
            {"scope": "entity.other.attribute-name.id.css", "settings": {"foreground": "#f32e48fb", "fontStyle": "bold"}} ,
            // class
            {"scope": "entity.other.attribute-name.class.css", "settings": {"foreground": "#e9596dfb", "fontStyle": "bold"}} ,
            // div, ul, li, span 등 선택자 요소들
            {"scope": "entity.name.tag.css", "settings": {"foreground": "#ec6f80ec"}} ,

            // 속성 프로퍼티        기본값 : #92CAF4
            {"scope": "support.type.property-name.css", "settings": {"foreground": "#85add1a6"}} ,
            // 문자 속성(값)          기본값 : #C8C8C8
            {"scope": "support.constant.property-value.css", "settings": {"foreground": "#C8C8C8"}} ,
            // 수치 속성(값)          기본값 : #B5CEA8
            {"scope": "constant.numeric.css", "settings": {"foreground": "#B5CEA8"}} ,
         

//  HTML 영역
            // 선택자
            {"scope": "entity.name.tag.html", "settings": {"foreground": "#e9596dfb", "fontStyle": ""}} ,
            // 선택자
            {"scope": "", "settings": {"foreground": "#000000fb", "fontStyle": ""}} ,
        ]
    },