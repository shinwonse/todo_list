# webpack 설정부터

## webpack을 사용하는 이유는?

webpack은 모던 자바스크립트 애플리케이션을 위한 정적 모듈 번들러이다. 여기서 번들링이란 무엇일까? 번들링이란 기본적으로 여러 개로 흩어져 있는 파일들을 압축, 난독화 등을 하여 하나의 파일로 모아주는 역할을 한다. 번들링을 하지 않는다면 브라우저는 하나의 서비스를 불러올 때 그 서비스를 구성하는 모든 수많은 자바스크립트 파일과 img, svg 파일 등을 불러와야 할 것이다. 

HTTP는 TCP 연결 기반 위에서 동작하는 프로토콜로 신뢰성 확보를 위해 연결을 맺고 끊는 데 있어서 핸드 셰이크가 이루어진다. 거기에다 HTTP는 비연결성 프로토콜이기 때문에 한 번 연결로 한 번의 요청과 응답을 하고 응답이 끝나면 연결을 끊어 버린다. 연결 시에는 3-way 핸드 셰이크가 일어나고 연결을 끊을 때에는 4-way 핸드 셰이크가 일어나는데, 자바스크립트 파일 하나를 받아올 때에도 7번의 핸드 셰이크가 일어나는데, 만약 자바스크립트 파일을 100개를 받아와야한다면 총 700번의 핸드 셰이크가 발생한다. 이는 분명히 큰 로드이며 네트워크 환경이 좋지 않다면 사용자 경험에 엄청난 악영향을 미칠 것이다.

웹팩을 비롯한 번들러는 자바스크립트 파일들 뿐만 아니라, 애플리케이션에 필요한 모든 종류의 파일들을 모듈 단위로 나누어 번들로 만든다. 또한 uglify 뿐만 아니라 최신 문법의 자바스크립트를 모든 웹 브라우저에서 작동할 수 있도록 트랜스파일링하는 기능도 가지고 있다.

webpack을 포함해서 rollup, parcel 등의 번들러가 존재하지만 webpack을 가장 많이 사용하는 이유는 아무래도 사용자가 많기 때문에 형성된 넓은 환경과 그 plugins의 존재 때문이라고 볼 수 있다.

***참고***
[웹팩 document](https://webpack.kr/concepts/why-webpack/#root)
[HTTP 알아보기](https://www.whatap.io/ko/blog/38/)

## Compile과 Transpile의 차이점

Compile: 어떠한 언어로 쓰여진 소스 코드를 컴퓨터가 이해할 수 있는 machine code로 바꾸는 과정을 일반적으로 Compile이라 한다.

Transpile: source-to-source compile이라고도 알려져 있다. 그래서 사실 기본적으로는 transpile은 compile의 하위 개념으로 볼 수 있고 소스 코드를 다른 언어로 바꾸거나 같은 언어의 다른 버전으로 바꾸는 역할을 수행한다. 일반적으로 사람이 이해할 수 있는 언어로 바꾸기 때문에 이를 실행하기 위해서는 compile 과정이 또 필요하다.

***참고***
[Compiler vs Transpiler](https://stackoverflow.com/questions/44931479/compiling-vs-transpiling)

## loader와 plugin의 차이점은?

`loader`는 번들링 중이거나 그 전에 개별 파일에 대해 작동한다. webpack은 오직 자바스크립트와 JSON 파일만을 이해할 수 있는데, `loader`는 dependency graph에 추가된 다른 타입의 파일들도 유효한 모듈로 변환할 수 있도록 해준다.

`plugin`은 보통 번들링 마지막 프로세스에 bundle이나 chunk 레벨에 대해 동작한다. `plugin`은 번들 자체가 생성되는 방법을 수정할 수도 있다. `plugin`은 webpack의 기능을 확장시키거나 더 유연하게 하며 output에 영향을 준다. 

***참고***
[Webpack Loader vs Plugin](https://dev.to/kamesh_dev/webpack-loader-vs-plugin-1l20)

## output을 쓰는 이유와 defer

#### defer
`<script>` 태그의 `defer` 속성은 페이지가 모드 로드된 후에 해당 외부 스크립트가 실행됨을 명시한다. `defer` 속성은 boolean 속성으로 명시하지 않으면 false, 명시하면 true 값을 갖는다. 

브라우저는 `defer` 속성이 있는 스크립트(defer 스크립트, 지연 스크립트)를 백그라운드에서 다운로드한다. 따라서 지연 스크립트를 다운로드하는 도중에도 HTML 파싱이 멈추지 않는다. 그리고 `defer` 스크립트 실행은 페이지 구성이 끝날 때까지 지연된다.

지연 스크립트는 일반 스크립트와 마찬가지로 HTML에 추가된 순으로 실행된다. 따라서 길이가 긴 스크립트가 앞에, 길이가 짧은 스크립트가 뒤에 있어도 짧은 스크립트는 긴 스크립트가 실행될 때까지 기다린다.

> 브라우저는 성능을 위해 먼저 페이지에 어떤 스크립트들이 있는지 쭉 살펴본 후에야 스크립트를 병렬적으로 다운로드한다. 뒤에 있는 크기가 작은 스크립트들이 앞의 크기가 큰 스크립트들보다 더 먼저 다운될 수 있지만 실행은 스크립트를 문서에 추가한 순서대로 실행된다.
---
### `querySelector`와 `getElementById`의 차이점?
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