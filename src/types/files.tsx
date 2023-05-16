export type ParagraphContent = {
    type: 'paragraph'
    text: string
  }
  
  export type ImageContent = {
    type: 'image'
    url: string
    caption?: string
  }
  
  export type IDEContent = {
    type: 'IDE'
    language: string
    code: string
  }
  
  export type ContentType = ParagraphContent | ImageContent | IDEContent
  
  export type Files = {
    id: string
    title: string
    usersAccessIDs: string[]
    content: ContentType[]
  }