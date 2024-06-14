export default function PersonalInfo () {
    return(
        <div>
           <form action="">
            <h1>Personal Info</h1>
            <h2>Please provide your name, email address and phone number</h2>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="name"/>
            <br />
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="person@email.com" />
            <br />
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder="e.g, +23408099749053" />
           </form>
        </div>
    )
}