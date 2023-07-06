export const calculateReadingTimeInMinutes = (body: string, language: string): number => {
    if (['zh', 'kr', 'jp'].includes(language)) {
        const AVERAGE_CPM = 300
        return Math.round(body.split('').length / AVERAGE_CPM)
    } else {
        const AVERAGE_WPM = 200
        return Math.round(body.split(/[ \n]/g).length / AVERAGE_WPM)
    }
}