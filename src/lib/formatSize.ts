export function formatSize(bytes: number): string {
    if (!bytes) return "0 Bytes"
  
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  
    const i = Math.floor(Math.log(bytes) / Math.log(k))
  
    return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}