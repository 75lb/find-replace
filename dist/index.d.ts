declare module 'find-replace' {
  function findReplace(array: any[], findFn: (x: any) => boolean, ...replaceWiths: any[]): any[];
  function findReplace<T>(array: T[], findFn: (x: T) => boolean, ...replaceWiths: (T | ((x: T) => T))[]): T[];
  export default findReplace;
}