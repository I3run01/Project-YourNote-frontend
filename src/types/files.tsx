type ParagraphContent = {
    type: string
    text: string
}
  
type ImageContent = {
    type: string
    codeBase64: string
}

type IDEContent = {
    type: string
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