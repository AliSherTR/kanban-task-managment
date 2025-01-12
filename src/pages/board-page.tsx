import { useParams } from "react-router-dom"

export default function BoardPage() {
    const {name} = useParams();
  return (
    <div>BoardPage {name}</div>
  )
}
