var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign(object, {key : value});
  return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  obj[key] = value;
  return object;
}
