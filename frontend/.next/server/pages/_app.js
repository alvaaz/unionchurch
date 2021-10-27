/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": () => (/* binding */ endpoint),\n/* harmony export */   \"prodEndpoint\": () => (/* binding */ prodEndpoint)\n/* harmony export */ });\nconst endpoint = `http://localhost:3000/api/graphql`;\nconst prodEndpoint = `fill me in when we deploy`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUksbUNBQWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFJLDJCQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uLWNodXJjaC8uL2NvbmZpZy5qcz9hMWJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbmRwb2ludCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWxgO1xuZXhwb3J0IGNvbnN0IHByb2RFbmRwb2ludCA9IGBmaWxsIG1lIGluIHdoZW4gd2UgZGVwbG95YDtcbiJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ \"@apollo/link-error\");\n/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ \"@apollo/client/react/ssr\");\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction createClient({\n  headers,\n  initialState\n}) {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({\n      graphQLErrors,\n      networkError\n    }) => {\n      if (graphQLErrors) graphQLErrors.forEach(({\n        message,\n        locations,\n        path\n      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);\n    }), // this uses apollo-link-http under the hood, so all the options here come from that package\n    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__.createUploadLink)({\n      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_4__.endpoint : 0,\n      fetchOptions: {\n        credentials: 'include'\n      },\n      // pass the headers along from this request. This enables SSR with logged in state\n      headers\n    })]),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache().restore(initialState || {})\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_with_apollo__WEBPACK_IMPORTED_MODULE_3___default()(createClient, {\n  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2l0aERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNTLFlBQVQsQ0FBc0I7QUFBRUMsRUFBQUEsT0FBRjtBQUFXQyxFQUFBQTtBQUFYLENBQXRCLEVBQWlEO0FBQy9DLFNBQU8sSUFBSVgsd0RBQUosQ0FBaUI7QUFDdEJZLElBQUFBLElBQUksRUFBRVgsMkRBQUEsQ0FBZ0IsQ0FDcEJFLDJEQUFPLENBQUMsQ0FBQztBQUFFVyxNQUFBQSxhQUFGO0FBQWlCQyxNQUFBQTtBQUFqQixLQUFELEtBQXFDO0FBQzNDLFVBQUlELGFBQUosRUFDRUEsYUFBYSxDQUFDRSxPQUFkLENBQXNCLENBQUM7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQSxTQUFYO0FBQXNCQyxRQUFBQTtBQUF0QixPQUFELEtBQ3BCQyxPQUFPLENBQUNDLEdBQVIsQ0FDRyw2QkFBNEJKLE9BQVEsZUFBY0MsU0FBVSxXQUFVQyxJQUFLLEVBRDlFLENBREY7QUFLRixVQUFJSixZQUFKLEVBQ0VLLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLG9CQUFtQk4sWUFBYSwwQ0FEbkM7QUFHSCxLQVhNLENBRGEsRUFhcEI7QUFDQVAsSUFBQUEsc0VBQWdCLENBQUM7QUFDZmMsTUFBQUEsR0FBRyxFQUFFLFFBQXlDaEIsNkNBQXpDLEdBQW9EQyxDQUQxQztBQUVmZ0IsTUFBQUEsWUFBWSxFQUFFO0FBQ1pDLFFBQUFBLFdBQVcsRUFBRTtBQURELE9BRkM7QUFLZjtBQUNBZCxNQUFBQTtBQU5lLEtBQUQsQ0FkSSxDQUFoQixDQURnQjtBQXdCdEJlLElBQUFBLEtBQUssRUFBRSxJQUFJdkIseURBQUosR0FBb0J3QixPQUFwQixDQUE0QmYsWUFBWSxJQUFJLEVBQTVDO0FBeEJlLEdBQWpCLENBQVA7QUEwQkQ7O0FBRUQsaUVBQWVOLHVEQUFVLENBQUNJLFlBQUQsRUFBZTtBQUFFTCxFQUFBQSxlQUFlQSx1RUFBQUE7QUFBakIsQ0FBZixDQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaW9uLWNodXJjaC8uL2xpYi93aXRoRGF0YS5qcz9kYmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdAYXBvbGxvL2xpbmstZXJyb3InO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyJztcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0IHsgZW5kcG9pbnQsIHByb2RFbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSAnYXBvbGxvLXVwbG9hZC1jbGllbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoeyBoZWFkZXJzLCBpbml0aWFsU3RhdGUgfSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcbiAgICAgIG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICAgICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKG5ldHdvcmtFcnJvcilcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfS4gQmFja2VuZCBpcyB1bnJlYWNoYWJsZS4gSXMgaXQgcnVubmluZz9gXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGhpcyB1c2VzIGFwb2xsby1saW5rLWh0dHAgdW5kZXIgdGhlIGhvb2QsIHNvIGFsbCB0aGUgb3B0aW9ucyBoZXJlIGNvbWUgZnJvbSB0aGF0IHBhY2thZ2VcbiAgICAgIGNyZWF0ZVVwbG9hZExpbmsoe1xuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBhc3MgdGhlIGhlYWRlcnMgYWxvbmcgZnJvbSB0aGlzIHJlcXVlc3QuIFRoaXMgZW5hYmxlcyBTU1Igd2l0aCBsb2dnZWQgaW4gc3RhdGVcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50LCB7IGdldERhdGFGcm9tVHJlZSB9KTtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJBcG9sbG9MaW5rIiwiSW5NZW1vcnlDYWNoZSIsIm9uRXJyb3IiLCJnZXREYXRhRnJvbVRyZWUiLCJ3aXRoQXBvbGxvIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJjcmVhdGVVcGxvYWRMaW5rIiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsImluaXRpYWxTdGF0ZSIsImxpbmsiLCJmcm9tIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImNhY2hlIiwicmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/withData.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/withData */ \"./lib/withData.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/alvarogoederivera/web/union-church/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // eslint-disable-next-line react/prop-types\n\n\n\nfunction MyApp({\n  Component,\n  pageProps,\n  apollo\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloProvider, {\n    client: apollo,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\nMyApp.getInitialProps = async function ({\n  Component,\n  ctx\n}) {\n  let pageProps = {};\n\n  if (Component.getInitialProps) {\n    pageProps = await Component.getInitialProps(ctx);\n  }\n\n  pageProps.query = ctx.query;\n  return {\n    pageProps\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_1__.default)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxTQUFTRSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQSxTQUFiO0FBQXdCQyxFQUFBQTtBQUF4QixDQUFmLEVBQWlEO0FBQy9DLHNCQUNFLDhEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRUEsTUFBeEI7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFREYsS0FBSyxDQUFDSSxlQUFOLEdBQXdCLGdCQUFnQjtBQUFFSCxFQUFBQSxTQUFGO0FBQWFJLEVBQUFBO0FBQWIsQ0FBaEIsRUFBb0M7QUFDMUQsTUFBSUgsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUlELFNBQVMsQ0FBQ0csZUFBZCxFQUErQjtBQUM3QkYsSUFBQUEsU0FBUyxHQUFHLE1BQU1ELFNBQVMsQ0FBQ0csZUFBVixDQUEwQkMsR0FBMUIsQ0FBbEI7QUFDRDs7QUFDREgsRUFBQUEsU0FBUyxDQUFDSSxLQUFWLEdBQWtCRCxHQUFHLENBQUNDLEtBQXRCO0FBQ0EsU0FBTztBQUFFSixJQUFBQTtBQUFGLEdBQVA7QUFDRCxDQVBEOztBQVNBLGlFQUFlSCxzREFBUSxDQUFDQyxLQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pb24tY2h1cmNoLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsbyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gIH1cbiAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIndpdGhEYXRhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/link-error");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-upload-client");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-with-apollo");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();