export function getAppUrl(path:string) {
    const appUrl = process.env.NEXT_PUBLIC_URL+(process.env.BASE_PATH || '')
    return`${appUrl}/${path}`
}