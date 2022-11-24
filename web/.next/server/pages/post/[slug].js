"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 257:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const sanityClient = __webpack_require__(97);
module.exports = sanityClient({
    projectId: 'xa9fgtwh',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-12-28'
});


/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "groq"
var external_groq_ = __webpack_require__(360);
var external_groq_default = /*#__PURE__*/__webpack_require__.n(external_groq_);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: external "@portabletext/react"
const react_namespaceObject = require("@portabletext/react");
// EXTERNAL MODULE: ./client.js
var client = __webpack_require__(257);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
;// CONCATENATED MODULE: ./pages/post/[slug].js





function urlFor(source) {
    return image_url_default()((client_default())).image(source);
}
const ptComponents = {
    types: {
        image: ({ value  })=>{
            var ref;
            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {
                return null;
            }
            return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: value.alt || ' ',
                loading: "lazy",
                src: urlFor(value).width(320).height(240).fit('max').auto('format')
            }));
        }
    }
};
const Post = ({ post  })=>{
    const { title ='Missing title' , name ='Missing name' , categories , authorImage , body =[]  } = post;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "By ",
                    name
                ]
            }),
            categories && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    "Posted in",
                    categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: category
                        }, category)
                    )
                ]
            }),
            authorImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: urlFor(authorImage).width(50).url(),
                    alt: `${name}'s picture`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PortableText, {
                value: body,
                components: ptComponents
            })
        ]
    }));
};
const query = (external_groq_default())`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
async function getStaticPaths() {
    const paths = await client_default().fetch((external_groq_default())`*[_type == "post" && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })
        ),
        fallback: true
    };
}
async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug =""  } = context.params;
    const post = await client_default().fetch(query, {
        slug
    });
    return {
        props: {
            post
        }
    };
}
/* harmony default export */ const _slug_ = (Post);


/***/ }),

/***/ 97:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 360:
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(113));
module.exports = __webpack_exports__;

})();