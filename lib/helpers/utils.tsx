//合并多个类名
export function classes (...names: (string | undefined)[]){
 return names.filter(Boolean).join(' ')
}


//给类名添加前缀
export function scopedClassMaker(prefix: string){
    return function x(name?: string){
        return [prefix, name].filter(Boolean).join('-')
    }
}