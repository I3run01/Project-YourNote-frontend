export type ParagraphContent = {
    type: 'paragraph'
    text: string
  }
  
export type ImageContent = {
    type: 'image'
    codeBase64: string
  }
  
export type IDEContent = {
    type: 'IDE'
    language: string
    code: string
  }
  
export type ContentType = ParagraphContent | ImageContent | IDEContent
  
export type filesType = {
  id: string
  title: string
  content: ContentType[]
}