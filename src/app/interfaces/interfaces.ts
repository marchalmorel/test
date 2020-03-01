export interface containerInfo {
  id: string,
  owner: string,
  history: []
}

export interface containerHistory {
  dateFrom: string,
  dateTo: string,
  sourcePort: string,
  sender: string,
  recipient?: string
}
