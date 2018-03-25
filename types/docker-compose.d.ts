export as namespace Docker
export type service = {
  image:string
}
export type config = {
  version: string
  services:{
    [name:string]: service
  }
}