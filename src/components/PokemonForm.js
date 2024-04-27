import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const initialFormValues = {
    name: '',
    hp: 0,
    frontUrl: '',
    backUrl: ''
  }

  const [formData, setFormData] = useState(initialFormValues)

  const { name, hp, frontUrl, backUrl } = formData

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e) {

    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }).then(res => res.json())
    .then(createdPokemon => onAddPokemon(createdPokemon))
    setFormData(initialFormValues)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
