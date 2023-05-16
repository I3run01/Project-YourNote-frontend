type ParagraphContent = {
    type: 'paragraph'
    text: string
  }
  
  type ImageContent = {
    type: 'image'
    codeBase64: string
  }
  
  type IDEContent = {
    type: 'IDE'
    language: string
    code: string
  }
  
  type ContentType = ParagraphContent | ImageContent | IDEContent
  
  export type filesType = {
    id: string
    title: string
    usersAccessIDs: string[]
    content: ContentType[]
  }