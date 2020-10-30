export function logParamTypes(target: any, key: string) {
  const types = Reflect.getMetadata('design:paramtypes', target, key);
  const s = types.map((a) => a.name).join();
  console.log(`${key} param types: ${s}`);
}
