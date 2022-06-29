# 📝 todo-list 만들기
## 1. Mission 1
### 구현
- todo list
  - CRD
  - 브라우저 껐다 켜도 유지되어야 함
  - 디자인 자유
  - 추가 버튼: 추가 아이콘 svg 넣기
  - 삭제 버튼: 삭제 아이콘 png 넣기

### 조건
- 웹팩 사용 (브라우저 점유율 99%)
  - 웹팩 플러그인 사용
  - 웹팩 개발 서버 사용 (HMR)
- 바닐라 JS로만 (React X)
  - DOM API 적극 활용
- index.html 바디 노드 내부에는 엘리먼트 두개 이상 사용금지

---

### 1.1 webpack을 사용하는 이유는?

webpack은 모던 자바스크립트 애플리케이션을 위한 정적 모듈 번들러이다. 여기서 번들링이란 무엇일까? 번들링이란 기본적으로 여러 개로 흩어져 있는 파일들을 압축, 난독화 등을 하여 하나의 파일로 모아주는 역할을 한다. 번들링을 하지 않는다면 브라우저는 하나의 서비스를 불러올 때 그 서비스를 구성하는 모든 수많은 자바스크립트 파일과 img, svg 파일 등을 불러와야 할 것이다. 

HTTP는 TCP 연결 기반 위에서 동작하는 프로토콜로 신뢰성 확보를 위해 연결을 맺고 끊는 데 있어서 핸드 셰이크가 이루어진다. 거기에다 HTTP는 비연결성 프로토콜이기 때문에 한 번 연결로 한 번의 요청과 응답을 하고 응답이 끝나면 연결을 끊어 버린다. 연결 시에는 3-way 핸드 셰이크가 일어나고 연결을 끊을 때에는 4-way 핸드 셰이크가 일어나는데, 자바스크립트 파일 하나를 받아올 때에도 7번의 핸드 셰이크가 일어나는데, 만약 자바스크립트 파일을 100개를 받아와야한다면 총 700번의 핸드 셰이크가 발생한다. 이는 분명히 큰 로드이며 네트워크 환경이 좋지 않다면 사용자 경험에 엄청난 악영향을 미칠 것이다.

웹팩을 비롯한 번들러는 자바스크립트 파일들 뿐만 아니라, 애플리케이션에 필요한 모든 종류의 파일들을 모듈 단위로 나누어 번들로 만든다. 또한 uglify 뿐만 아니라 최신 문법의 자바스크립트를 모든 웹 브라우저에서 작동할 수 있도록 트랜스파일링하는 기능도 가지고 있다.

webpack을 포함해서 rollup, parcel 등의 번들러가 존재하지만 webpack을 가장 많이 사용하는 이유는 아무래도 사용자가 많기 때문에 형성된 넓은 환경과 그 plugins의 존재 때문이라고 볼 수 있다.

***참고***
[웹팩 document](https://webpack.kr/concepts/why-webpack/#root)
[HTTP 알아보기](https://www.whatap.io/ko/blog/38/)

### 1.2 Compile과 Transpile의 차이점

Compile: 어떠한 언어로 쓰여진 소스 코드를 컴퓨터가 이해할 수 있는 machine code로 바꾸는 과정을 일반적으로 Compile이라 한다.

Transpile: source-to-source compile이라고도 알려져 있다. 그래서 사실 기본적으로는 transpile은 compile의 하위 개념으로 볼 수 있고 소스 코드를 다른 언어로 바꾸거나 같은 언어의 다른 버전으로 바꾸는 역할을 수행한다. 일반적으로 사람이 이해할 수 있는 언어로 바꾸기 때문에 이를 실행하기 위해서는 compile 과정이 또 필요하다.

***참고***
[Compiler vs Transpiler](https://stackoverflow.com/questions/44931479/compiling-vs-transpiling)

### 1.3 loader와 plugin의 차이점은?

`loader`는 번들링 중이거나 그 전에 개별 파일에 대해 작동한다. webpack은 오직 자바스크립트와 JSON 파일만을 이해할 수 있는데, `loader`는 dependency graph에 추가된 다른 타입의 파일들도 유효한 모듈로 변환할 수 있도록 해준다.

`plugin`은 보통 번들링 마지막 프로세스에 bundle이나 chunk 레벨에 대해 동작한다. `plugin`은 번들 자체가 생성되는 방법을 수정할 수도 있다. `plugin`은 webpack의 기능을 확장시키거나 더 유연하게 하며 output에 영향을 준다. 

***참고***
[Webpack Loader vs Plugin](https://dev.to/kamesh_dev/webpack-loader-vs-plugin-1l20)

### 1.4 output을 쓰는 이유와 defer

#### defer
`<script>` 태그의 `defer` 속성은 페이지가 모드 로드된 후에 해당 외부 스크립트가 실행됨을 명시한다. `defer` 속성은 boolean 속성으로 명시하지 않으면 false, 명시하면 true 값을 갖는다. 

브라우저는 `defer` 속성이 있는 스크립트(defer 스크립트, 지연 스크립트)를 백그라운드에서 다운로드한다. 따라서 지연 스크립트를 다운로드하는 도중에도 HTML 파싱이 멈추지 않는다. 그리고 `defer` 스크립트 실행은 페이지 구성이 끝날 때까지 지연된다.

지연 스크립트는 일반 스크립트와 마찬가지로 HTML에 추가된 순으로 실행된다. 따라서 길이가 긴 스크립트가 앞에, 길이가 짧은 스크립트가 뒤에 있어도 짧은 스크립트는 긴 스크립트가 실행될 때까지 기다린다.

> 브라우저는 성능을 위해 먼저 페이지에 어떤 스크립트들이 있는지 쭉 살펴본 후에야 스크립트를 병렬적으로 다운로드한다. 뒤에 있는 크기가 작은 스크립트들이 앞의 크기가 큰 스크립트들보다 더 먼저 다운될 수 있지만 실행은 스크립트를 문서에 추가한 순서대로 실행된다.
---
### 1.5 `querySelector`와 `getElementById`의 차이점?
```javascript
import './index.css'

const word = 'hello world';

document.querySelector('#root').innerHTML = word;
```
처음에 예시 파일을 위와 같이 작성했었는데, querySelector와 getElementById의 차이점도 모른 채 사용했다는 것을 알게되었다.
#### querySelector

`Document.querySelector()`는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없으면 null을 반환한다.

`document.querySelector(selectors)`구문으로 실행할 수 있는데, 이 때 selectors는 하나 이상의 선택자를 포함한 DOMString이다. 직접 확인해본 결과 selectors는 `querySelector('#first', '#second')` 같이 하나 이상의 선택자를 넣어줄 수 있었다. 이 여러개의 선택자 중 첫번째로 일치하는 요소를 선택한다.

`Document.querySelectorAll()`이라는 메소드도 있다. 해당 메소드는 지정된 셀렉터 그룹에 일치하는 다큐먼트의 엘리먼트 리스트를 나타내는 정적 NodeList를 반환한다. 이때 NodeList는 index 번호로 접근이 가능하다.

#### getElementById
`Document.getElementById()` 메서드는 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환한다. 이때 반환된 객체에는 name, id, index 번호로 접근이 가능하다. MDN 문서에서는 ID가 없는 요소에 접근하려면 `Document.querySelector()`를 사용하라고 명시되어있다. 그렇다면 굳이 모든 선택자를 사용할 수 있는 `Document.querySelector()`를 두고 왜 `Document.getElementById()` 메서드가 있을까? 

`Document.querySelector()`나 `Document.querySelectorAll()`과는 달리 `getElementById()`는 전역 document 객체의 메서드로만 사용할 수 있고, DOM의 다른 객체는 메서드로 가지고 있지 않다. ID 값은 문서 전체에서 유일해야 하며 "국지적"인 버전을 쓸 이유가 없기 때문이다.

다시 내 말로 풀어쓰면 id는 모든 노드에 걸쳐서 고유한 값이기 때문에 각 엘리먼트마다 `getElementyById()` 메서드를 가질 필요없이 document 전역 객체에서만 가지고 있어도된다. 이 때문에 아래와 같은 코드는 오류가 발생하는 것이다.

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="parent-id">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p>hello word3</p>
        <p>hello word4</p>
    </div>
    <script>
        var parentDOM = document.getElementById('parent-id');
        var test1=parentDOM.getElementById('test1');
        //throw error
        //Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
</body>
</html>
```

---
## 2. Mission 2
0. 모든 결정에 "왜?" 라는 고민을 하고, 고민의 과정을 기록
1. Resource assets, Inlining assets 적용
2. 파일 두개 이상으로 분리 
3. let 쓰지 않기
4. 성능 개선 (프로파일링 직접 하기) <- 1만개의 아이템을 추가했다가 삭제하는 스크립트 짜기 (자동화)
5. 가독성 개선
6. 로컬스토리지의 단점 조사 (그래도 로컬 스토리지는 사용하기)
7. 이벤트 위임 적용

---
### ⭐️ 파일 두개 이상으로 분리
리액트를 사용한 프로젝트를 주로 했어서, 컴포넌트 단위 개발에 익숙하다. Vanila JS에서는 모듈을 어떻게 분리하였는지, 또 html 파일은 어떻게 분리하여 사용할 수 있는지 알아볼 필요가 있었다.

HTML, CSS, JavaScript 세 파일로 이루어지는 프로젝트의 폴더 구조는 어떤지 찾아보았다. 그 결과 src 폴더 아래 css, img, js 폴더를 두는 구조로 결정하였다.

### ⭐️ body안에 엘리먼트 최대 두개만
body안에 엘리먼트를 최대 두개만 둬야한다. 일단 전체를 감싸는 div태그 하나와 form태그 정도를 두는걸 생각했었는데 그럼 그 안에 들어가는 엘리먼트들은 다 `createElement()` 메서드로 만들어야할까? 그렇다면 `createElement()` 메서드가 너무 많이 사용될거 같아 다른 방법을 알아보고자 했다.

1. 첫번째 방법
```javascript
const rootBody = document.getElementById("root");
rootBody.innerHTML = "<div><h1>TODO LIST</h1><h2>todo list</h2></div>"
```
JSX 문법과 비슷하게 `innerHTML` 에 html 태그들로 이루어진 문자열을 할당한다. 

2. 두번째 방법
```javascript
const rootBody = document.getElementById("root");
rootBody.insertAdjacentHTML('afterbegin', '<div><h1>TODO LIST</h1><h2>todo list</h2></div>')
```
`insertAdjacentHTML` 메서드는 HTML 또는 XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가한다. 이미 사용중인 element는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element들을 건드리지 않는다. (`innerHTML`은 덮어쓴다) `innerHTML`보다 작업이 덜 드므로 빠르다. 하지만 여전히 XSS 공격으로부터 취약하다.

`innerHTML`메서드는 파싱 과정이 한번 더 있어 `insertAdjacentHTML`보다 성능이 좋지 않고 HTML 문자열을 그대로 추가하는 것이기 때문에 XSS 공격의 위험으로 보안상의 문제도 있다. 대체재로 `textContent`와 `innerText`가 있고 `textContent`를 사용하는 것이 가장 좋다.

***참고***
>[MDN](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)
[티스토리](https://chanto11.tistory.com/51)

### ⭐️ XSS (Cross Site Scripting)

크로스 사이트 스크립팅(XSS)은 공격자가 상대방의 브라우저에 스크립트가 실행되도록 해 사용자의 세션을 가로채거나, 웹사이트를 변조하거나, 악의적 컨텐츠를 삽입하거나, 피싱 공격을 진행하는 것을 말한다. 웹사이트 사이를 넘어서 공격한다는 의미에서 크로스 사이트 스크립팅이라는 용어가 생겼다.

### ⭐️ Resource assets, Inlining assets 적용
webpack5부터 기존의 로더들을 대체하기 위해 4개의 새로운 모듈 유형이 추가되었다. 애셋 모듈은 로더를 추가로 구성하지 않아도 애셋 파일(폰트, 아이콘 등)을 사용할 수 있도록 해주는 모듈이다.

네개의 새로운 모듈 중 별도의 파일을 내보내고 URL을 추출하는 `asset/resource` 모듈과 애셋의 data URI를 내보내는 `asset/inline` 모듈을 사용하고자 한다.

#### Resource assets
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
};
```
```javascript
import mainImage from './images/main.png';

img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'
```
모든 png 파일을 출력 디렉터리로 내보내고 해당 경로를 번들에 삽입한다.

#### Inlining assets
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
    ]
  }
};
```
```javascript
import addIcon from './assets/add.svg';

addImg.style.background = `url(${addIcon})`;
```

### ⭐️ 로컬스토리지의 단점 조사 (그래도 로컬 스토리지는 사용하기)

웹 스토리지 객체(web storage object)인 localStorage와 sessionStorage는 브라우저 내에 키-값 쌍을 저장할 수 있게 해준다.

이 둘을 사용하면 페이지를 새로 고침하고(sessionStorage의 경우) 심지어 브라우저를 다시 실행해도(localStorage의 경우) 데이터가 사라지지 않고 남아있다. 그런데 "쿠키를 사용하면 브라우저에 데이터를 저장할수 있는데, 왜 또 다른 객체를 사용해 데이터를 저장하는걸까요?"라는 의문이 들 수 있다. 쿠키 이외에도 다른 방식을 사용하는 이유는 다음과 같다.

- 쿠키와 다르게 웹 스토리지 객체는 네트워크 요청 시 서버로 전송되지 않는다. 이런 특징 때문에 쿠키보다 더 많은 자료를 보관할 수 있다.
- 서버가 HTTP 헤더를 통해 스토리지 객체를 조작할 수 없다. 웹 스토리지 객체 조작은 모두 자바스크립트 내에서 수행된다.
- 웹 스토리지 객체는 도메이, 프로토콜, 포트로 정의되는 오리진에 묶여있다. 따라서 프로토콜과 서브 도메인이 다르면 데이터에 접근할 수 없다.

#### 로컬스토리지
- 오리진이 같은 경우 데이터는 모든 탭과 창에서 공유된다.
- 브라우저나 OS가 재시작하더라도 데이터가 파기되지 않는다.

로컬스토리지의 키와 값은 반드시 문자열이어야 한다. 숫자나 객체 등 다른 자료형을 사용하게 되면 문자열로 자동 변환된다.
```javascript
localStorage.user = {name: "John"};
alert(localStorage.user); // [object Object]
```
JSON을 사용하면 객체를 쓸 수 있다.
```javascript
localStorage.user = JSON.stringify({name: "John"});

// 잠시 후
let user = JSON.parse( localStorage.user );
alert( user.name ); // John
```

#### 세션스토리지
로컬스토리지와 제공하는 프로퍼티와 메서드는 같지만, 훨씬 제한적이다.

- 세션스토리지는 현재 떠 있는 탭 내에서만 유지된다.
  - 같은 페이지라도 다른 탭에 있으면 다른 곳에 저장되기 때문이다.
  - 그런데 하나의 탭에 여러 개의 iframe이 있는 경우엔 동일한 오리진에서 왔다가 취급되기 때문에 세션스토리지가 공유된다.
- 페이지를 새로 고침할 때 데이터가 사라지지 않는다. 하지만 탭을 닫고 새로 열 때는 사라진다.
> iframe -> inline frame의 약자로 웹 페이지 안에 또 다른 웹 페이지를 삽입

#### 쿠키
위에도 쿠키와의 차이점을 적었지만 쿠키에 대해 아직 잘 모르는 것 같아서 조사를 해봤다.

쿠키는 긴 시간동안 앱 또는 웹사이트를 방문하는 유저들에 대한 정보를 저장하는 주된 방법이었다고 한다. 쇼핑 카트 항목들 또는 유저에 의해 변경된 옵션같은 상태를 기록하는데 사용되었다. 그리고 유저가 검색한 것을 기억하거나 페이지 간 이동했을 때 로그인 상태를 유지하는데에 사용되었다.

쿠키는 웹사이트에 의해 유저의 컴퓨터에 놓여지는 작은 텍스트 파일들로 최대 4KB의 용량을 가진 매우 작은 양의 데이터이다. 쿠키는 사이트에서 방문한 페이지를 저장하거나 유저의 로그인 정보를 저장하는 등 다양한 방법으로 사용된다. 그리고 문자열만 저장할 수 있다는 제한이 있다.

쿠키는 두가지 유형이 있는데 `persistent cookies`와 `session cookies`이다.

`session cookies`는 만료일을 포함하지 않지만 대신 브라우저나 탭이 열려있는 동안에만 저장되며 브라우저가 닫히면 쿠키는 영구적으로 삭제된다. (은행권에서 사용하기 좋다)

`persistent cookies`는 만료일을 가진다. 이 쿠키는 만료일까지 유저의 디스크에 저장되고 만료일이 지나면 삭제된다. 유저들이 방문할 때마다 유저 경험을 커스텀하기 위해 특정 웹사이트에서 행동을 기록하는 등 여러 활동들에 사용될 수 있다.

쿠키와 로컬스토리지의 가장 중요한 차이점 중 하나는 쿠키와는 달리 모든 HTTP 요청에서 로컬스토리지는 데이터를 주고받을 필요가 없다는 것이다. HTTP 요청에서 데이터를 주고받지 않고 로컬스토리지를 이용하면 클라이언트와 서버간의 전체 트랙픽과 낭비되는 대역폭의 양을 줄일 수 있다. 데이터가 유저의 로컬 디스크에 저장되어 있으면 인터넷이 끊어져도 데이터가 삭제되거나 지워지지 않기 때문이다. 이 때문에 인터넷 연결이 잘 유지되지 않는 지역에서 사용하는 애플리케이션의 경우 유용하다. 또한 로컬스토리지는 최대 5MB의 정보를 저장할 수 있어 쿠키의 용량보다 훨씬 크다.

로컬스토리지의 만료 조건은 `persistent cookies`처럼 동작하는데 자바스크립트 코드를 통해 삭제하지 않으면 데이터는 자도응로 삭제되지 않는다. 오랜 시간동안 저장해야하는 큰 데이터에 유용하다. 또한 로컬스토리지를 사용하면 문자열 뿐만 아니라 자바스크립트의 primitives와 object도 저장할 수 있다.

지금까지 로컬스토리지의 장점만 나열하였는데 그렇다면 단점도 있을까? 우선 HTML5부터 지원되는 기능이기 때문에 HTML4만 지원되는 구형 브라우저에서는 지원이 되지 않는다. (물론 이제 그럴일은 없을 것 같다)

또한 로컬스토리지는 저장되는 단계에서 입력된 데이터를 평문 그대로 로컬 디스크에 저장하며, 파일의 형태로 디스크에 저장되기 때문에, Cross Site Scripting(XSS) 공격부터 물리적인 공격까지 다양한 악의적인 공격을 통해 파일의 내용을 열람하거나, 파일 자체를 네트워크를 통해 외부로 전송하는 것이 가능하다. 획득한 로컬스토리지 파일은 쉽게 수정이 가능하고, 값을 획득하였을 경우, 획득한 값을 이용하여 동일한 로컬스토리지를 생성하는 것 또한 가능하다. 또한 획득한 로컬스토리지 파일을 생성한 도메인이 아닌 다른 도메인에서 재사용이 가능하다. 따라서 민감한 데이터를 로컬스토리지에 저장하는 것은 추천되지 않는다.




***참고***
[모던자바스크립트 튜토리얼](https://ko.javascript.info/localstorage)
[쿠키 vs 로컬스토리지](https://erwinousy.medium.com/%EC%BF%A0%ED%82%A4-vs-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-28b8db2ca7b2)