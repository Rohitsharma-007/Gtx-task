import React, { useState } from "react"

function Tenantsmodal() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName && email) {
      const person = { id: 101, firstName, email }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName("")
      setEmail("")
    } else {
      console.log("empty values")
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">add tenant</button>
      </form>
      {people.map((person, index) => {
        const { id, firstName, email } = person
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </>
  )
}

export default Tenantsmodal
