// /functions/hello-world.js

const items = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "musa" },
];

exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  };
};
