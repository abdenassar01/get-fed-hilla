export function ClassNames(...classes: string[]): string{
    let _className = ""
    for (let i = 0; i < classes.length; i++) {
        _className += classes[i] + " "
    }
    return _className
}