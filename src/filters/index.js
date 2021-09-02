export function inProgress(item) {
  return item.status.code === 1 || item.status.code === 2
}

export function isFinished(item) {
  return item.status.code === 3 || item.status.code === 4
}