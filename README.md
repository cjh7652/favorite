# favorite
<h2>html 셋팅</h2>

 <pre>
  {
   // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
   // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
   // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
   // same ids are connected.
   // Example:
   // "Print to console": {
   //    "prefix": "log",
   //    "body": [
   //       "console.log('$1');",
   //       "$2"
   //    ],
   //    "description": "Log output to console"
   // }
   "당신이 필요했던 그것 html form" : {
   "prefix": "!!" ,
   "body": [
   "<!DOCTYPE html>",
   "<html lang=\"ko\">",
   "<head>",
   "<title>     </title>",
   /* meta */
   "<meta charset='utf-8'>",
   "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
   "<meta name='Title' content=''>",
   "<meta name='Subject' content=''>",
   "<meta name='Keywords' content=''>",
   "<meta name='Author' content=''>",
   "<meta name='Publisher' content=''>",
   "<meta name='Description' content=''>",
   "<meta name='Author-Date' content=''>",
   "<meta name='Copyright' content=''>",
   "",
   /* link + script */
   // 폰트어썸
   "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'>",
   // 구글폰트 아이콘
   "<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' />",
   // CSS 리셋
   "<link href='https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'>",
   // 제이쿼리 3.7 CDN
   "<script src='https://code.jquery.com/jquery-3.7.0.min.js' crossorigin='anonymous'></script>",
   // 로컬 CSS
   "<link rel='stylesheet' href='./css/style.css'/>" ,
   // 로컬 js
   "<script src='./js/script.js' defer></script>",
   // +@ 당신의 작업대
   "",
   "</head>",
   "<body>",
   "", //공백을 위한 공간입니다.
   "",
   "</body>",
   "</html>"
    ],
    "description": "Seong-ho/Kim-Sub html"
       
    }
 }
 </pre>
 <h2> 사용법 </h2>
  비주얼 스튜디오코드 설정-사용자코드설정-html.json에 붙여 넣기<br/>
  index.html - !! + enter

 <br/>
 <br/>
 <h2>visual studio Custom</h2>
<h3>사용법- 설정-설정-설정json열기</h3>
<pre>
{
   "당신이 필요했던 그것 html form" : {
   "prefix": "!!" ,
   "body": [
   "<!DOCTYPE html>",
   "<html lang=\"ko\">",
   "<head>",
   "<title>     </title>",
   /* meta */
   "<meta charset='utf-8'>",
   "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
   "<meta name='Title' content=''>",
   "<meta name='Subject' content=''>",
   "<meta name='Keywords' content=''>",
   "<meta name='Author' content=''>",
   "<meta name='Publisher' content=''>",
   "<meta name='Description' content=''>",
   "<meta name='Author-Date' content=''>",
   "<meta name='Copyright' content=''>",
   "",
   // 접근성 텍스트(skip) 숨김
   "<style>#skip{overflow: hidden; position:absolute; width:0; height:0; line-height:0; text-indent:-9999px;}</style>",
   /* link + script */
   // 폰트어썸
   "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'>",
   // 구글폰트 아이콘
   "<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' />",
   // CSS 리셋
   "<link href='https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'>",
   // 제이쿼리 3.7 CDN
   "<script src='https://code.jquery.com/jquery-3.7.0.min.js' crossorigin='anonymous'></script>",
   "",
   // 로컬 CSS
   "<link rel='stylesheet' href='./css/style.css'/>" ,
   // 로컬 js
   "<script src='./js/script.js' defer></script>",
   // +@ 당신의 작업대
   "",
   "</head>",
   "<body>",
   /* 시각장애인 웹 접근성을 위한 skip _ 지우지않아도 됩니다. */
   "<ul id='skip'>",
   "   <li><a href='#header'>헤더 바로가기</a></li>",
   "   <li><a href='#nav'>메뉴 바로가기</a></li>",
   "   <li><a href='#content'>내용 바로가기</a></li>",
   "</ul>", 
   "",   
   //공백을 위한 공간입니다.
   "", 
   "",
   "</body>",
   "</html>"
    ],
    "description": "jeehyun html"
       
    }
 }
</pre>
