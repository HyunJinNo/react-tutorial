import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import { thunk } from "redux-thunk";
import PreloadContext from "./lib/PreloadContext";

// asset-manifest.json에서 파일 경로들을 조회합니다.
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf-8"),
);

const createPage = (root: string, stateScript: string) => {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
      <meta name="theme-color" content="#000000"/>
      <title>React App</title>
      <link href="${manifest.files[`main.css`]}" rel="stylesheet">
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${root}</div>
      ${stateScript}
      <script src="${manifest.files[`main.js`]}"></script>
    </body>
  </html>`;
};

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수입니다.
const serverRender = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.

  //const context = {};
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  const preloadContext = {
    done: false,
    promises: Array<Promise<any>>(),
  };

  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링합니다.
  try {
    await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입합니다.
  res.send(createPage(root, stateScript)); // 클라이언트에게 결과물을 응답합니다.
};

const serve = express.static(path.resolve("./build"), {
  index: false, // "/" 경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve); // 순서가 중요합니다. serveRender 전에 위치해야 합니다.
app.use(serverRender);

// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
