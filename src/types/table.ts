export type LinksType = {
  first?: {
    href: string
  }
  prev?: {
    href: string
  }
  self?: {
    href: string
  }
  next?: {
    href: string
  }
  last?: {
    href: string
  }
}

export type PageType = {
  size: number
  totalElements: number
  totalPages: number
  number: number
}

export type DataType<T, Key extends string> = {
  _embedded?: {
    [K in Key]: T
  }
  _links: LinksType
  page: PageType
}
