export interface CheckboxBlockProps {
  heading: string
  optionsConfig: Array<{
    name: string
    id: string
  }>
  handleCheck: Function
}
