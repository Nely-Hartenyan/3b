import { useState } from "react"

function ContactForm() {
    const [data,setData] = useState({
            fullName: "",
            email: "",
            message: ""
    })

    const [error,setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {};
        if (!data.email.trim()) {
             newErrors.email = "Email is required.";
        }
        setError(newErrors)

        if (Object.keys(newErrors).length > 0) {
      return;
    }

        console.log(data)
    }

    const handleChange = (e) => {
        const {value, name} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return(
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-[200px] mx-auto">
            <input 
                className="border-1" 
                type="text" 
                placeholder="Full name"
                name='fullName'
                onChange={handleChange}
            />
            <input 
                className="border-1" 
                type="email" 
                placeholder="Email"
                name='email'
                onChange={handleChange}
            />
            {error.email && (
                <p className="text-red-600 ">
                    {error.email}
                </p>
            )}
            <textarea 
                className="border-1"
                placeholder="Write message"
                name='message'
                onChange={handleChange}
            >
            </textarea>

            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm