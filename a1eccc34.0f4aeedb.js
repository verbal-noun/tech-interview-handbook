(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(1),n=a(6),o=(a(0),a(145)),i={id:"matrix",title:"Matrix"},c={id:"algorithms/matrix",title:"Matrix",description:"## Notes",source:"@site/../contents/algorithms/matrix.md",permalink:"/tech-interview-handbook/algorithms/matrix",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/matrix.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Math",permalink:"/tech-interview-handbook/algorithms/math"},next:{title:"Object-Oriented Programming",permalink:"/tech-interview-handbook/algorithms/oop"}},l=[{value:"Notes",id:"notes",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],s={rightToc:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"A matrix is a 2-dimensional array. Questions involving matrices are usually related to dynamic programming or graph traversal."),Object(o.b)("p",null,"For questions involving traversal or dynamic programming, you almost always want to make a copy of the matrix with the same dimensions that is initialized to empty values to store the visited state or dynamic programming table. Be familiar with such a routine:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"rows, cols = len(matrix), len(matrix[0])\ncopy = [[0 for _ in range(cols)] for _ in range(rows)]\n")),Object(o.b)("p",null,"Many grid-based games can be modeled as a matrix, such as Tic-Tac-Toe, Sudoku, Crossword, Connect 4, Battleship, etc. It is not uncommon to be asked to verify the winning condition of the game. For games like Tic-Tac-Toe, Connect 4 and Crosswords, where verification has to be done vertically and horizontally, one trick is to write code to verify the matrix for the horizontal cells, transpose the matrix and reuse the logic for horizontal verification to verify originally vertical cells (which are now horizontal)."),Object(o.b)("p",null,"Transposing a matrix in Python is simply:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"transposed_matrix = zip(*matrix)\n")),Object(o.b)("h2",{id:"corner-cases"},"Corner cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Empty matrix. Check that none of the arrays are 0 length"),Object(o.b)("li",{parentName:"ul"},"1 x 1 matrix"),Object(o.b)("li",{parentName:"ul"},"Matrix with only one row or column")),Object(o.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/set-matrix-zeroes/"}),"Set Matrix Zeroes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/spiral-matrix/"}),"Spiral Matrix")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/rotate-image/"}),"Rotate Image")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/word-search/"}),"Word Search"))))}m.isMDXComponent=!0},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r),o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)};var l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),m=i(a),p=r,d=m[c+"."+p]||m[p]||l[p]||o;return a?n.a.createElement(d,Object.assign({},{ref:t},s,{components:a})):n.a.createElement(d,Object.assign({},{ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=a[m];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);