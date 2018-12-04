export const post = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const json = await res.json();
    return json;
  } catch (e) {
    throw e;
  }

}
