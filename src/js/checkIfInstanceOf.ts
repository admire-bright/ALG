function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || !(classFunction instanceof Function)) return false;
  return Object(obj) instanceof classFunction;
}
