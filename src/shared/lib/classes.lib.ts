export const cls = (...classes: (string | undefined | boolean)[]) => {
    return classes.filter(it => it !== undefined && it !== false).join(' ');
}