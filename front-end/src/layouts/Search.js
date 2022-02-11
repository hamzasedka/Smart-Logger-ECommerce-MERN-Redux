import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import "./Search.css"
function Search() {
  return (
      <div>
    <InputGroup className="mb-3 searchBar">
    <FormControl
      placeholder="You can Search here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Search
    </Button>
  </InputGroup>
      </div>
  )
}

export default Search