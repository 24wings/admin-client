export function getFuncParam(func: Function): string[] {
    return ((/\(\s*([\s\S]*?)\s*\)/.exec(func as any) as any)[1] as any).split(/\s*,\s*/)
}