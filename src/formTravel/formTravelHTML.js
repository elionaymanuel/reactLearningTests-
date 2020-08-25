import React from 'react'

export default function Form (props){

    return (
        <div>
                
               
            <main>  
            <form >
                <h4>Name:</h4>
                    <input type="text"
                        name = 'firstName'
                        value = {props.firstName}
                        onChange = {props.handleChange}
                        placeholder = 'your first name here'
                    />
               
               
                    <input type="text"
                        name = 'lastName'
                        value = {props.lastName}
                        onChange = {props.handleChange}
                        placeholder = 'your last name here'
                    />

                <br/>

                <h4>Your age:</h4>

                    <input type="number" 
                        name="age" 
                        onChange = {props.handleChange}
                        value = {props.age}/>

                <br/>
                <h4>Choose your gender</h4>
                
                        <label htmlFor="female">
                            <input type="radio" 
                                name="gender" 
                                value = 'female' 
                                id = 'female'
                                checked = {props.gender === 'female'}
                                onChange = {props.handleChange}
                            />
                        female
                        </label>
                
                

                        <label htmlFor="male">
                            <input type="radio" name="gender" id="male"
                                value = 'male'
                                checked = {props.gender === 'male'}
                                onChange = {props.handleChange}
                            
                            />
                            male
                        </label>
                <br/>
              
                <h4>Choose your destination</h4>
               
                    <select name="destination" value = {props.destination} onChange = {props.handleChange}>
                        <option selected value="Brasil">Brasil</option>
                        <option value="Niguaragua">Niquaragua</option>
                        <option value="puta que pariu">far far way</option>
                    </select>
                
                <h4>choose your diet</h4>
                        <label htmlFor="isKosher">
                            <input type="checkbox" name='isKosher'
                                onChange = {props.handleChange}
                                checked = {props.isKosher}
                            />
                        Kosher?
                        </label>
               

                <br/>

                        <label htmlFor="isLacFree">
                            <input type="checkbox" name='isLacFree'
                                onChange = {props.handleChange}
                                checked = {props.isLacFree}
                            />
                            lacFree?
                        </label>
                <br/>

               

                            <label htmlFor="isVegan">
                                <input type="checkbox" name='isVegan'
                                    onChange = {props.handleChange}
                                    checked = {props.isVegan}
                            />
                            vegan?
                        </label>
                <br/>
                
                <button onClick = {props.handleSubmit}>Submit</button>
            </form>
            <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.firstName} {props.lastName}</p>
                <p>Your age: {props.age}</p>
                <p>Your gender: {props.gender}</p>
                <p>Your destination: {props.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {props.isKosher? ' kosher ' : ""}, 
                    {props.isLacFree? ' lacFree ' : ""}, 
                    {props.isVegan? 'vegan ' : ""}
                </p>

            </main>  
            </div>
    )

}
