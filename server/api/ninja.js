export default defineEventHandler(async (event) => {
  //handle query params
  const { name } = getQuery(event);

  //handle post data
  const { number } = await readBody(event);

  //api call with pricate key
  /* 
  const { data } = await $fetch(
    "https://api.currencyapi.com/V3/latest?apikey=xxx"
  ); */
  return {
    message: `Hello, ${name}, you have ${number} bananas`,
  };
});
