export const round2 = (num: number):number => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}
export function covertDoctoObj(doc:any){
  doc._id=doc._id.toString()
  return doc
}