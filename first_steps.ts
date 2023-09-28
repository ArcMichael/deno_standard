console.log("Welcome to Deno!");

const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body)

export { };

/**
 * 这种方式增加了网络权限
 */
// deno run --allow-net=deno.com first_steps.ts