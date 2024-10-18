import { ErrorMsg } from "../Common/ErrorMsg"
import { Navbar } from "./Navbar"
import { Button } from "../Common/Button"

export const Activities = () => {
  return (
    <>
    <Navbar subtitle={"Welcome back"} children={"Activities"} button={
        <Button>Cypher AI</Button>
    }/>

    <ErrorMsg/>
    </>
  )
}
