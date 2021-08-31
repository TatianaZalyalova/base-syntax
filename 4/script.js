/* З №1 */
export function addAgeProp(obj) {
  const input = window.prompt("Введите число");
  obj.age = +input;
}
/* З №2 */
export function getCopyObj(obj, copyObjName) {
  Object.assign(copyObjName, obj);
  copyObjName.role = "admin";
  const { name, age, role } = copyObjName;
  console.log(name, age, role);
}
