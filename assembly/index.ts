export function encode(data: string): string {

    const array = Uint8Array.wrap(String.UTF8.encode(data))

    let ret = ''

    for (let i = 0; i < array.length; ++i) {
      ret += String.fromCharCode(array[i])
    }
    return ret

}

export function decode(data: string): string {

    let array = new Uint8Array(data.length)

    for (let i = 0; i < array.length; ++i) {
        array.fill(data.charCodeAt(i), i, i + 1)
    }

    return String.UTF8.decode(array.buffer)

}