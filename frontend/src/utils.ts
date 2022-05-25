

export function form2Obj<T extends object>(e: Event): T {
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const json = Object.fromEntries(data.entries())

    let lists = {} as any;

    Object.keys(json)
        .filter(x => x.includes('[') && x.includes(']'))
        .map(x => {
            const key = x.substring(0, x.indexOf('['));
            if (!lists[key]) lists[key] = [];
            const index = x.substring(x.indexOf('[')+1, x.indexOf(']'))
            console.log(x, key, index)
            lists[key][index] = json[x];
            delete json[x]
        })
    return Object.assign(json, lists) as T;
}