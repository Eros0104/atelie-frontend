const isObjectFieldsEmpty = (obj) => {
  for (let key in obj) {
    if(obj[key] !== "")
      return false;
  }
  return true;
}

export default isObjectFieldsEmpty;