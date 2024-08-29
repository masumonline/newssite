// import GhostContentAPI from "@tryghost/content-api";
// export const getPost = () => {
//   const test = "demo";
//   const api = new GhostContentAPI({
//     url: "http://localhost:8080",
//     key: "5c2ee25d9a6c47d0cd7f9ac970",
//     version: "v5.0",
//   });
// }

// It will be available as useFoo() (camelCase of file name without extension)
export default function () {
  return useState('foo', () => 'bar')
}
