import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import { thunk } from "redux-thunk";
import PreloadContext from "./lib/PreloadContext";
import { createPage } from "./index.server";

// 서버 사이드 렌더링을 처리할 핸들러 함수입니다.
export const serverRender = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.
  //const context = {};
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  const jsx = (
    <PreloadContext>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext>
  );
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(createPage(root)); // 클라이언트에게 결과물을 응답합니다.
};
