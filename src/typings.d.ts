// # 3rd Party Library
// If the library doesn't have typings available at `@types/`,
// you can still use it by manually adding typings for it
declare interface JsYaml{
    load(yam:string):any
}
declare var jsyaml:JsYaml;
declare var db;
declare interface Window{
    db:any
}