## About the course

Go through the videos on your on pace.
Try out the next steps on your own.
Also revisit the projects and try to rebuild them without the videos.

https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources
https://github.com/mschwarzmueller/nextjs-course-code

Q&A section + Discord server is available.

## Next.JS

Built on top of React.

Fetching and handling data.
Handling form submission becomes more easy.

Routing happens in the file system. --> ** file-based routing **

Server-Side Rendering --> SEO friendly.

---

nexjs.org

`npx create-next-app@latest`

Pages are rendered on the server

### Routers

#### App Router

Relatively new way - was introduced with v13.

#### Pages Router

Older, more stable way on how we can do the routing.

`npm run dev`

With next.js you can build full stack applications with utilizing React.

app/awesome/page.js

## React Refresher

### How to run the React Refresher Course?

`yarn install & yarn dev-react-refresher`
With the magic of yarn & concurrently this should do the trick!

https://github.com/academind/react-complete-guide-course-resources/tree/main/code/30%20React%20Summary

React is a javascript library to build user interfaces.
We are going to write javascript code to create highly interactive user interfaces.

Imperative (jQuery, default javascript way) vs declarative code (React).

_Declarative programming_ is a paradigm that focuses on what the program should
achieve, without explicitly stating how to achieve it. It is a high-level concept
that abstracts the intricacies of the underlying system. Examples could be: SQL,
React JSX

_Imperative programming_ is a paradigm where you explicitly state how the program
should achieve the desired result. You write step-by-step instructions for the
computer to follow.

Codewhisperer --> AI code generator, I don't think that I am going to need that
for this course :)

_Create React App_
or Vite

`npx create-react-app`

JSX files

src/main.js

```
import React from 'react';
import ReactDOM from 'react-dom/client';
```

React.ScriptMode - warnings regarding to sub-optimal code usage.
https://react.dev/reference/react/StrictMode

Typically functions that return JSX are called components.

Any website that you can think of is built up by building blocks - components.

> We will build a Twitter like demo app!

React components are just functions, but the name of the function MUST be upper-
case. Elements that start with lower case chars are treated by React as default
html tags.

`<h1>{4+4}</h1>` whatever is in the curly braces is calculated by the JS engine

`rafce` --> React Functional Component skeleton in VSCode.
Extension that allows this: ES7+ React/Redux/React-Native snippets.

An element must return with a highest level tag / component.
You can use self closing tags, like `<Post />`

JS `Array.prototype.map(callbackFn)` callbackFn function can have 3 arguments:

- element
- index
- array

Props enable us to pass arguments to our components.

`className` can be added to the components, but this can have css class name
clashes.

Use `Post.module.css` to use css modules.
`import classes from "./Post.module.css";` and then `className={classes.post}`

This ensures unique class names throughout the whole application.

`Array.prototype.sort(compareFn)`
Compare function should return a number where:

- A negative value indicates that a should come before b.
- A positive value indicates that a should come after b.
- Zero or NaN indicates that a and b are considered equal.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

#### State

`const [state, setState] = useState(defaultValue)`
And then the stateful value and the setState fn can be prop drilled down to
other components and we can traverse the data through the component hierarchy.

If a website is dynamic, then it can have different states. React can manage the
states of the website. It can register a changing state and can create a function
to set a new state for the changing part. If the setState is called, a rerender
happens.

In JS functions are totally normal values (objects), thus they can be passed
around.

React hook --> must execute in React component functions.
Array destructuring.

##### Lifting the state up

State in component A, but event that would update the state
in component B - then you need to find their shared first parent and lift the
state up there and props drill down the setState function to component B and the
state to component A.

---

**2024.05.23.**

To get back to the topic, I have implemented another modal window and some new
state handling for setting the star ratings for the individual posts. I lifted
the state to the App component.

If the new state depends on the old state, you need to use the function callback
trick, so that the order of the state updates will be correct. React does not
instantly updates the states, but schedules the work for later on. With this trick
we guarantee, that the states will be updated in the correct order.

```js
const [state, setState] = useState([1, 2, 3]);
setState((previous) => [...previous, 4]);
```

### useEffect

React components are just functions. They should be pure functions: no side effects.
Pure function: for an input produce a reliable output. Ie.: receive props, return
predictable jsx components.

Manipulating side effects should be separated from rendering, in order to make sure
that the side effect does not get in the way of the rendering. If we need to perform
a side effect we would need to do that **after** the rendering.

In short, useEffect is a tool that lets us interact with the outside world but
not affect the rendering or performance of the component that it's in.

```js
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {}, []);
}
```

useEffect has a callback function and a dependencies array. If the deps array is
not given it will run the callback on each re-render.

### useMemo

Call `useMemo` at the top level of your component to cache a calculation between
re-renders.
Use-case: skip costly recalculations.

### useRef

`useRef` is a React hook that lets you reference a value that is not needed for
rendering.

You can store information between rerenders, which is not the case with regular
variables. Changing the information does not trigger a re-render (not like
state). Information is local to each copy of your component.

React has built in support to manipulate the DOM with a ref. You can pass a ref
object to the ref prop of a JSX element. After React creates the DOM node and
puts it on the screen, React will set the current property of your ref object to
that DOM node.

### useFormStatus

The `useFormStatus` Hook provides status information of the last form submission.

The `useFormStatus` Hook must be called from a component that is rendered inside
a <form>. `useFormStatus` will only return status information for a
parent <form>. It will not return status information for any <form>
rendered in that same component or children components.

`const { pending, data, method, action } = useFormStatus();`

### useFormState

`useFormState` is a Hook that allows you to update state based on the result
of a form action.

`const [formState, formAction] = useFormState(serverAction, initialState);`

`useFormState` acts as a middle man between your form submission and your server
action. This ultimately let your form behave in an interactive way.

### Routing

Layout routes: other routes are embedded into it.
We need to use the `<Outlet />` component to load the child route components.

Example for routing:

`index.js`

```js
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import New from "./routes/New";
import App from "./routes/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/new",
        element: <New />,
      },
    ],
  },
]);
```

We can use the `<Link />` component to enable react routing based Linking between
routes - that way we will get an SPA navigation from site to site.

`useNavigate()` hook can be reached from 'react-router-dom' and can be used to
programmatically navigate between routes. The created `navigate()` function should
be called from a `useEffect()`.

---

Inside of routes you can define loaders to fetch data for the given route.

`{path: "/", element: <Posts />, loader: PostsLoader}`

You can have a loading state and use the data with the `useLoaderData` hook.

```js
import { defer, useLoaderData } from "react-router-dom";

export default function MyComponent() {
  const loaderData = useLoaderData();
  return (
    <main>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.data} errorElement={<p>Error</p>}>
          ((data) => <ChildComponent data={data} />)
        </Await>
      </React.Suspense>
    </main>
  );
}

// return a defered object for the data fetch
export async function loader() {
  const data = fetch("http://myapi.com/")
    .then((res) => res.json())
    .then((res) => res.data);
  return defer({ data: data });
}
```

You also can post data to APIs with actions from react-router-dom.
Use actions and `Form`.

The `Object.fromEntries()` static method transforms a list of key-value pairs
into an object (Map --> object).

---

# Next Js - Food Lovers project

`page.tsx` and `layout.tsx` are reserved file names.
Executed on the server and treated as a server component as of now.

You need at least one `layout.tsx` file. Also you can embed them into each other.
From layout you need to export the metadata with title and description.

Regarding to project organization, Next Js is not opinionated way to much. Here
are some different strategies you could be going with:
https://nextjs.org/docs/app/building-your-application/routing/colocation

### Reserved filenames in Next Js

- **page.tsx** => Create a new page (e.g., app/about/page.js creates a
  <your-domain>/about page)
- **layout.tsx** => Create a new layout that wraps sibling and nested pages
- **not-found.tsx** => Fallback page for "Not Found" errors (thrown by sibling or
  nested pages or layouts)
- **error.tsx** => Fallback page for other errors (thrown by sibling pages or
  nested pages or layouts)
- **loading.tsx** => Fallback page which is shown whilst sibling or nested pages
  (or layouts) are fetching data
- **route.tsx** => Allows you to create an API route (i.e., a page which does NOT
  return JSX code but instead data, e.g., in the JSON format)

https://nextjs.org/docs/app/api-reference/file-conventions

### Dynamic routing

- app
  - blog
    - [slug]
      - page.tsx

The component in `page.tsx` receives a `props.params.slug` with the slug
variable content.

Use `<Image />` from `next/image` to harness the power of NextJs based image
optimization.

---

One can redirect the user to the closest `not-found.tsx`, with simply calling
`notFound()` from `next/navigation`.

### Server Actions

You can ensure that a form is processed by the magic of NextJs on the backend
side.

1. you create an async function, that as a first line contains the `use server;`
   directive
2. you make sure to set the `action` prop of the form to this function
3. you submit your form, and NextJS will submit it to new POST endpoint!

```bash
curl 'http://localhost:3000/meals/share' --compressed -X POST -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0' -H 'Accept: text/x-component' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br, zstd' -H 'Referer: http://localhost:3000/meals/share' -H 'Next-Action: bd1b557989394b88dfdfe6517725ce51d94bd8f6' -H 'Next-Router-State-Tree: %5B%22%22%2C%7B%22children%22%3A%5B%22meals%22%2C%7B%22children%22%3A%5B%22share%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2Fmeals%2Fshare%22%2C%22refresh%22%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D' -H 'Content-Type: multipart/form-data; boundary=---------------------------17785095919373405401561800468' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Priority: u=0' --data-binary $'-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="1_name"\r\n\r\nAndr\xc3\xa1s\r\n-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="1_email"\r\n\r\nandras@acs.hu\r\n-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="1_title"\r\n\r\nTest my image submission\r\n-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="1_summary"\r\n\r\nA test summary\r\n-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="1_instructions"\r\n\r\nThese are my test instructions\r\n-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="1_image-picker"; filename="adasveteli-3.jpg"\r\nContent-Type: image/jpeg\r\n\r\n-----------------------------17785095919373405401561800468\r\nContent-Disposition: form-data; name="0"\r\n\r\n["$K1"]\r\n-----------------------------17785095919373405401561800468--\r\n'
```

With this, then in the function you can easily process the submitted form data.
Crazy times we live in 🥲🥲🥲!

### Building for production

So far we only started our dev server, with `yarn run dev`, in which we did not
use the heavy-weight caching of NextJs.

We can build production code with `yarn run build` and serve it with
`yarn run start`. In this version NextJs will generate static pages fetching
the data the same way how we would be fetching it during runtime, but now this
time it is happening in build time.

To enable dynamic behavior and purging the cache we need to use `revalidatePath()`
function after we are executing some data-mutations.

`revalidatePath(path, "page" (default) / "layout")` --> "layout" takes care of
all sub-paths as well.

### Metadata

Each page can export either a `metadata` constant or a `generateMetadata(props)`
async function with which NextJS can generate the HTML metadata & title tags.

### Parallel routes

Parallel Routes allows you to simultaneously or conditionally render one or more
pages within the same layout. They are useful for highly dynamic sections of an
app, such as dashboards and feeds on social sites.

You can create them like this:

- app
  - archive
    - @archive
      - page.tsx
    - @latest
      - page.tsx
    - layout.tsx

Then the `layout.tsx` will receive `{children, archive, latest}` props, so it can
render the parallel routes. All of the pages will be reachable under `/archive`.

If we are navigating under the parallel routes, and one of the parallel route is
not defined, the it will lead to a 404. We need to make sure to add a `default.tsx`
to the parallel routes.

### Catch-all routes

Use the folder name notation of `[[...filter]]` to create catch all routes.

Then inside the page component you will get an array in the `param.filter` with
the parts of the path. I.e: /2024/1 --> `["2024","1"]`.

---

`usePathname()` from is a `"next/navigation"` client component hook, that lets
you to get the current path name. I used it in the Routing News app to make sure
that the currently active header menu item is highlighted.

---

# Javascript internals

## Single threaded

Js has only one thread to execute program steps in the Js Engine.

## Non-blocking

An instruction is not awaited by default, other instructions can start.

## Asynchronous

The Js Engine calls to APIs in the JS runtime and lets them execute tasks
while continuing to work on its own set of instructions.

## How it works?

The JS engine parses the JS code and puts all function calls on a stack. It
executes the instructions from the stack, until it meets a task that can
be only executed by an API in the Js Runtime (setTimeout, setInterval, DOM
manipulation, fetch, etc..).

Then that instruction is set to the API, which works on it, while the single
threaded JS engine continues to execute the instructions on the stack.

Once a runtime task is done, a callback is put on the callback queue. The event-
loop ensures that once the stack is not containing any more instructions to
execute, then the first element is shifted from the callback queue to execute.

```js
function run() {
  run1();
  console.log("a");
  setTimeout(() => {
    console.log("b");
  }, 0);
  console.log("c");
}

function run1() {
  console.log("d");
  setTimeout(() => console.log("e"), 0);
}

run();
```

This outputs:

```js
"d"; // run1 instruction from the stack
"a"; // run instruction from the stack
"c"; // run instruction from the stack
"e"; // from the callback queue (pushed first)
"b"; // from the callback queue (pushed second)
```

As written here: https://www.freecodecamp.org/news/javascript-asynchronous-operations-in-the-browser/

## How `this` works?

`this` is like an implicit parameter for a function.

JS has lexical scope, that is a static context in which the function lexical
identifiers will be executing. Lexical scope is always static, we create it during
author time, and they will be unaffected during runtime.

`this` allows us to have a way to call our functions with a dynamic context.

## Implicit context invocation

```js

let point = {
  x: null,
  y: null,
  init(x,y) = {
    this.x = x;
    this.y = y;
  },
  toString() {
    return `(${this.x},${this.y})`
  }
}
```

`point.init(1,2); point.toString();` --> `this` will reference to the `point`
object.

## Default context invocation

In `"use strict";` mode `this` will be set to `undefined`. This behavior will
raise a `TypeError` upon invoking the this-aware function, signaling us, that
we did not provide explicitly a `this` binding.

In non strict mode, in the browser the default `this` will bind to `window`, in
Node it will bind to `global` object.

See reference file: `js-basics/this-default-context-invocation.js`.

## Explicit context invocation

Use `call()` or `apply()` to set the value for `this` for a function invocation.

```js
let anotherPoint = {};
let yetAnotherPoint = {};
point.init.call(anotherPoint, 4, 5);
point.init.apply(yetAnotherPoint, [6, 7]);
point.toString.apply(anotherPoint, []); // prints (4,5)
point.toString.call(yetAnotherPoint); // prints (6,7)
```

For `apply()` you provide the first argumentum as the `this`, and inside an array
you provide the remaining argumentums of the function.
For `call()` you provide the first argumentum as the `this`, and then the
remaining argumentums of the function.

We can "borrow" functions from other objects this way.

## New context invocation

Upon calling a `new` on a function, it will create a new object, set the prototype
reference of the new object to the original function's prototype, set the `this`
value for the new object and .call() the function, and if the function does not
return explicitly an object, then it will return the newly created object,
otherwise the object that is returned from the called function.

```js
const laptop = {
  sleep: function () {
    console.log(`${this.name} goes to sleep`);
  },
};

laptop.name = "MBP";
laptop.sleep(); // MBP goes to sleep

const dell = new laptop.sleep(); // undefined goes to sleep
console.log(dell.__proto__); // Object {constructor: sleep()}
console.log(dell.__proto__ == laptop.sleep.prototype); // true
```

## Rules to decide what will be `this`

1. Is the function invoked with new, creating and setting a new this?
2. Is the function invoked with call(..) or apply(..), explicitly setting this?
3. Is the function invoked with an object reference at the call-site
   (e.g., point.init(..)), implicitly setting this?
4. If none of the above... are we in non-strict mode? If so, default the this to
   globalThis. But if in strict-mode, default the this to undefined.

## DOM event listeners

```js
const myElement = document.getElementById("myElement");
myElement.addEventListener("click", function () {
  console.log(this);
});
```

In the above case the `this` will reference the DOM object.

```js
const myElement = document.getElementById("myElement");
myElement.addEventListener("click", () => {
  console.log(this);
});
```

But in the arrow function case the `this` will be the `this` of the parent scope!

## Things to check on

- _CSS grid_ is used in the CSS, so I think further down I should learn it.
- also flexbox needs to be learned again.. :)
- Common js vs Es module?
- HTML5 dialog tag
- Typescript must be done
  - https://www.freecodecamp.org/news/learn-typescript-with-interactive-lessons/
  - https://www.freecodecamp.org/news/learn-typescript-for-practical-projects/
- vite
- forwardRef, useImperativeHandler
- how to do custom hooks and why?!
- VITEST / cypress
- lexical scope / closures
- prototypical inheritance
- How can we serve a website / how does the data transformation stuff work?

- next js baseUrl?!
- how does chat gpt work? - Gergely Orosz presentation links should have that

TODO:

- put into containers and docker-compose the whole stuff
