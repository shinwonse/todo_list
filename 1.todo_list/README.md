# webpack 설정부터

## webpack을 사용하는 이유는?

## loader와 plugin의 차이점은?

## output을 쓰는 이유와 defer
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