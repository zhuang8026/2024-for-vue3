// 主色按鈕
export const btnMainStyle = (text: String = 'Text', disable: boolean = false) => {
    return {
        text: text,
        disable: disable,
        theme: '2',
        color: 'tranparent',
        type: 'full',
        wd: 'auto'
    }
}
// border 160px的按鈕
export const btnBorderMainStyle = (text: String = 'Text', disable: boolean = false) => {
    return {
        text: text,
        disable: disable,
        theme: '2',
        color: 'main',
        type: 'border',
        wd: 'auto'
    }
}

