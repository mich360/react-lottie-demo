import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './App.css';

function App() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./lf20_bP3BLu.json'),
    });

    return () => {
      animation.destroy(); // コンポーネントがアンマウントされたときにアニメーションを破棄します
    };
  }, []);

  return (
    <div className="App">
      <h1>React Lottie Demo</h1>
      <div className="container" ref={container}></div>
      <p>この動画は、<a href='https://www.youtube.com/watch?v=LIoRZZ_va_o'>こちら</a> を参考にしました</p>
      <div id="p">
      <p>npx create-react-appコマンドを使用してReactアプリケーションを作成することができます。</p>
      <p>以下のコマンドを実行してReactアプリケーションを作成できます。</p>
      <pre><code>
      npx create-react-app my-app
      </code></pre>
     上記のコマンドを実行すると、my-appという名前の新しいディレクトリが作成され、
     Reactアプリケーションの初期構造が自動的にセットアップされます。
     このコマンドを実行する前に、
     Node.jsとnpm（Node Package Manager）がローカル環境にインストールされていることを確認してください。
     また、npxコマンドはnpmバージョン5.2.0以降で利用可能です。
      </div>
     
    </div>
  );
}

export default App;

// import React, { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';
// import './index.css'; // 必要な場合はApp.cssをインポート

// function App() {
//   const container = useRef(null);

//   useEffect(() => {
//     lottie.loadAnimation({
//       container: container.current,
//       renderer: 'svg',
//       loop: true,
//       autoplay: true,
//       animationData: require('./lf20_bP3BLu.json'),
//     });
//   }, []);

//   return (
//     <div className="App">
//       <h1>React Lottie Demo</h1> {/* h1要素を追加 */}
//       <div className="container" ref={container}></div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';

// function App() {

//   const container = useRef(null)

//   useEffect(() => {
//     lottie.loadAnimation({
//       container: container.current,
//       renderer: 'svg',
//       loop: true,
//       autoplay: true,
//       animationData: require('./lf20_bP3BLu.json'),
//       rendererSettings: {
//         scale: 0.3 // 縮小率を設定します（例として0.5を指定）
//       }
//     });
//   }, []);
  
//   // useEffect(() => {
//   //   lottie.loadAnimation({
//   //     container: container.current,
//   //     renderer: 'svg',
//   //     loop: true,
//   //     autoplay: true,
//   //     animationData: require('./lf20_bP3BLu.json')
//   //   })
//   // }, [])
  
  
//   return (
//     <div className="App">
//       <h1>React Lottie Demo</h1>
//       <div className="container" ref={container} ></div>
//     </div>
//   );
// }

// export default App;
